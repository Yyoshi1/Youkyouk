import { Sequelize } from "sequelize";

// تهيئة قاعدة البيانات SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./youkyouk.db", // اسم الملف ديال قاعدة البيانات
  logging: false
});

export default sequelize;
