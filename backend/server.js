import { sequelize } from './config/db.js';
import Task from './models/Task.js';

const startServer = async () => {
  try {
    await sequelize.sync(); // هذا غادي ينشئ الجدول إلا ما كانش موجود
    console.log('Database synced.');

    // هنا كود بدء السيرفر
    console.log('Server running...');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

startServer();
