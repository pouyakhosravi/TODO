import { Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { GetEnvValuesService } from 'src/configurations/getEnvValues.service';

export const MongooseConfigProvider = [
  {
    provide: 'MONGOOSE_CONFIG_PROVIDER',
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
      Logger.log(
        `App connected to mongoDB form mongoose to ${mongoDBData.dataBaseName} DB`,
      );
      return connection;
    },
    inject: [GetEnvValuesService],
  },
];
