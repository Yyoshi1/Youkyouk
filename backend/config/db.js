import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './youkyouk.db', // هاد الملف غادي يتخلق تلقائياً
  logging: false
});
