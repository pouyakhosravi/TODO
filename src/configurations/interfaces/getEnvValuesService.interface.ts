import {
  AppValuesInterface,
  MongoDBValuesInterface,
  PostgreSqlValuesInterface,
} from '../constants/configurations.constants';

export interface GetEnvValuesServiceInterface {
  app: AppValuesInterface;
  mongoDb: MongoDBValuesInterface;
  postgreSql: PostgreSqlValuesInterface;
  jwtSecretKey?: string;
  salt?: string;
  rabbitMqURI?: string;
}
