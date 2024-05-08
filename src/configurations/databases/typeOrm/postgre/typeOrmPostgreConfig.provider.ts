import { InternalServerErrorException, Logger } from '@nestjs/common';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';

export const TypeOrmPostgreConfigProvider = [
  {
    provide: 'TYPE_ORM_POSTGRE_CONFIG_PROVIDER',
    useFactory: async (envValues: GetEnvValuesService) => {
      const postgresData = {
        host: envValues.postgreSql.host,
        port: envValues.postgreSql.port,
        userName: envValues.postgreSql.userName,
        password: envValues.postgreSql.password,
        dataBaseName: envValues.postgreSql.databaseName,
      };
      if (!postgresData.host || !postgresData.port) {
        throw new InternalServerErrorException();
      }

      const dataSource = new DataSource({
        type: 'postgres',
        host: postgresData.host,
        port: +postgresData.port,
        username: postgresData.userName,
        password: postgresData.password,
        database: postgresData.dataBaseName,
        entities: [User],
        synchronize: true,
      });
      Logger.log(
        `App connected to Postgres form TypeORM to ${postgresData.dataBaseName} DB`,
      );
      return await dataSource.initialize();
    },
    inject: [GetEnvValuesService],
  },
];
