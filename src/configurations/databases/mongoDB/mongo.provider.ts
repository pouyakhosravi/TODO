import { Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const mongoDBProviders = [
  {
    imports: [ConfigModule],
    provide: 'MONGO_DB_CONNECTION',
    useFactory: async (
      configService: ConfigService,
    ): Promise<typeof mongoose> => {
      const dbData = {
        host: configService.get<string>('mongo.host'),
        port: configService.get<string>('mongo.port'),
        userName: configService.get<string>('mongo.userName'),
        password: configService.get<string>('mongo.password'),
        name: configService.get<string>('mongo.databaseName'),
      };

      const appMode = configService.get<string>('app.mode');
      const connection = await mongoose.connect(
        appMode === 'development'
          ? `mongodb://${dbData.host}/${dbData.name}`
          : `mongodb://${dbData.userName}:${dbData.password}@${dbData.host}:${dbData.port}/${dbData.name}`,
      );
      Logger.log(`App connected to mongodb`);
      return connection;
    },
    inject: [ConfigService],
  },
];
