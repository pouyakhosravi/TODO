import { InternalServerErrorException, Logger } from '@nestjs/common';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';

export const TypeOrmMongoConfigProvider = [
  {
    provide: 'TYPE_ORM_MONGO_CONFIG_PROVIDER',
    useFactory: async (envValues: GetEnvValuesService) => {
      const mongoDBData = {
        host: envValues.mongoDb.host,
        port: envValues.mongoDb.port,
        userName: envValues.mongoDb.userName,
        password: envValues.mongoDb.password,
        dataBaseName: envValues.mongoDb.databaseName,
      };
      if (!mongoDBData.host || !mongoDBData.port) {
        throw new InternalServerErrorException();
      }

      const dataSource = new DataSource({
        type: 'mongodb',
        host: mongoDBData.host,
        port: +mongoDBData.port,
        username:
          envValues.app.mode === 'development' ? '' : mongoDBData.userName,
        password:
          envValues.app.mode === 'development' ? '' : mongoDBData.password,
        database: mongoDBData.dataBaseName,
        entities: [User],
        synchronize: true,
      });
      Logger.log(
        `App connected to mongoDB form TypeORM to ${mongoDBData.dataBaseName} DB`,
      );
      return await dataSource.initialize();
    },
    inject: [GetEnvValuesService],
  },
];
