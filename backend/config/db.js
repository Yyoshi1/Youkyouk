import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // أو أي مسار بغيت للـ SQLite
});

export default sequelize;
