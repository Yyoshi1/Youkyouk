import { Sequelize } from 'sequelize';

// هنا نستعمل SQLite بلا node-gyp
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './youkyouk.db',
  logging: false
});
