import { EnvironmentValues } from './interfaces/appEnvirnoments.interface';

export const envValues = (): EnvironmentValues => ({
  app: {
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3002,
    mode: process.env.APP_MODE || 'development',
  },
  mongo: {
    databaseName: process.env.MONGODB_DATABASE_NAME || 'todo',
    host: process.env.MONGODB_HOST || 'localhost',
    password: process.env.MONGODB_PASSWORD || '123456789',
    port: process.env.MONGODB_PORT || '27017',
    userName: process.env.MONGODB_USER_NAME || 'user',
  },
  jwtSecretKey: process.env.JWT_SECRET_KEY || 'test',
  salt: process.env.SALT || 'part_ai$123',
});
