import { sequelize } from './config/db.js'; // إذا بغيت default: import sequelize
import User from './models/User.js';

async function main() {
  try {
    await sequelize.sync({ force: true }); // ينشئ الجداول
    console.log("Database & tables created!");

    // اختبار إنشاء مستخدم
    const user = await User.create({ name: "Karim", email: "karim@example.com" });
    console.log(user.toJSON());
  } catch (err) {
    console.error(err);
  }
}

main();
