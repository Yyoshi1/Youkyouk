import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./youkyouk.db", // الملف ديال قاعدة البيانات
  logging: false
});
