type AppValuesInterface = {
  port?: string;
  mode?: string;
};

type MongoDBValuesInterface = {
  host?: string;
  port?: string;
  userName?: string;
  password?: string;
  databaseName?: string;
};

type PostgreSqlValuesInterface = {
  host?: string;
  port?: string;
  userName?: string;
  password?: string;
  databaseName?: string;
};

export {
  AppValuesInterface,
  MongoDBValuesInterface,
  PostgreSqlValuesInterface,
};
