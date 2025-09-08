import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../data/youkyouk.db", // تأكد هاد المسار
  logging: false
});
