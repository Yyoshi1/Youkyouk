import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./youkyouk.db", // الملف اللي حددتيه في database.js
  logging: false
});
