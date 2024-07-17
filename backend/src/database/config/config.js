import {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
} from "../../config/env.config.js";
// export config in ES module scope
export default {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql",
    timezone: "America/Argentina/Buenos_Aires",
    dialectOptions: {
      charset: "utf8mb4",
      supportBigNumbers: true,
      bigNumberStrings: true,
      dateStrings: true,
      typeCast: true,
      timezone: "local",
    },
    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations",
    seedStorage: "sequelize",
    seedStorageTableName: "seeds",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};