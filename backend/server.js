import sequelize from './config/db.js';
import User from './models/User.js';
import Product from './models/Product.js';

const startServer = async () => {
  try {
    await sequelize.sync({ force: false }); // إنشاء الجداول إذا ماكانوش موجودين
    console.log("Database synced successfully ✅");

    // مثال: إضافة مستخدم
    const user = await User.create({
      name: "Karim",
      email: "karim@example.com",
      password: "123456"
    });

    console.log("User created:", user.toJSON());

  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
