interface AppValues {
  port: number;
  mode: string;
}

interface MongoDBValues {
  port: string;
  host: string;
  userName: string;
  password: string;
  databaseName: string;
}

export interface EnvironmentValues {
  app: AppValues;
  mongo: MongoDBValues;
  jwtSecretKey: string;
  salt: string;
}
