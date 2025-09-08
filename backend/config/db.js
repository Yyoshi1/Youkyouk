import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../data/youkyouk.db", // تأكد أن هاد المسار موجود
  logging: false
});
