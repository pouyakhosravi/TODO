import { Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as mongoose from 'mongoose';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';

export const mongoDBProviders = [
  {
    imports: [ConfigModule],
    provide: 'MONGO_DB_CONNECTION',
    useFactory: async (
      envValues: GetEnvValuesService,
    ): Promise<typeof mongoose> => {
      const mongoDBData = {
        host: envValues.mongoDb.host,
        port: envValues.mongoDb.port,
        userName: envValues.mongoDb.userName,
        password: envValues.mongoDb.password,
        dataBaseName: envValues.mongoDb.databaseName,
      };

      const appMode = envValues.app.mode;
      const connection = await mongoose.connect(
        appMode === 'development'
          ? `mongodb://${mongoDBData.host}/${mongoDBData.dataBaseName}`
          : `mongodb://${mongoDBData.userName}:${mongoDBData.password}@${mongoDBData.host}:${mongoDBData.port}/${mongoDBData.dataBaseName}`,
      );
      Logger.log(`App connected to mongodb`);
      return connection;
    },
    inject: [GetEnvValuesService],
  },
];
