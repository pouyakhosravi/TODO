import { ConfigModuleOptions, ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import * as joi from 'joi';
import { GetEnvValuesServiceInterface } from './interfaces/getEnvValuesService.interface';

@Injectable()
export class GetEnvValuesService implements GetEnvValuesServiceInterface {
  constructor(private configService: ConfigService) {}

  get app() {
    return {
      port: this.configService.get<string>('APP_PORT'),
      mode: this.configService.get<string>('APP_MODE'),
    };
  }

  get mongoDb() {
    return {
      host: this.configService.get<string>('MONGO_DB_HOST'),
      port: this.configService.get<string>('MONGO_DB_PORT'),
      userName: this.configService.get<string>('MONGO_DB_USER_NAME'),
      password: this.configService.get<string>('MONGO_DB_PASSWORD'),
      databaseName: this.configService.get<string>('MONGO_DB_DATABASE_NAME'),
    };
  }

  get postgreSql() {
    return {
      host: this.configService.get<string>('POSTGRE_SQL_HOST'),
      port: this.configService.get<string>('POSTGRE_SQL_PORT'),
      userName: this.configService.get<string>('POSTGRE_SQL_USER_NAME'),
      password: this.configService.get<string>('POSTGRE_SQL_PASSWORD'),
      databaseName: this.configService.get<string>('POSTGRE_SQL_DATABASE_NAME'),
    };
  }

  get jwtSecretKey() {
    return this.configService.get<string>('JWT_SECRET_KEY');
  }

  get salt() {
    return this.configService.get<string>('SALT');
  }

  get rabbitMqURI() {
    return this.configService.get<string>('RABBI_MQ_URI');
  }
}

export const environmentsValuesOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env', '.env.example'],
  validationSchema: joi.object({
    APP_PORT: joi.string().required(),
    APP_MODE: joi.string().required(),

    MONGO_DB_HOST: joi.string().required(),
    MONGO_DB_PORT: joi.string().required(),
    MONGO_DB_USER_NAME: joi.string().required(),
    MONGO_DB_PASSWORD: joi.string().required(),
    MONGO_DB_DATABASE_NAME: joi.string().required(),

    POSTGRE_SQL_HOST: joi.string().required(),
    POSTGRE_SQL_PORT: joi.string().required(),
    POSTGRE_SQL_USER_NAME: joi.string().required(),
    POSTGRE_SQL_PASSWORD: joi.string().required(),
    POSTGRE_SQL_DATABASE_NAME: joi.string().required(),

    JWT_SECRET_KEY: joi.string().required(),

    SALT: joi.string().required(),

    RABBI_MQ_URI: joi.string().required(),
  }),
};
