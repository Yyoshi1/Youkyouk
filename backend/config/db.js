import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./youkyouk.db",
  logging: false
});

export default sequelize;
