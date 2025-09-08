import express from "express";
import { sequelize } from "./config/db.js";
import User from "./models/User.js";
import Task from "./models/Task.js";

const app = express();
app.use(express.json());

// اختبار الاتصال بقاعدة البيانات
sequelize.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ DB connection error:", err));

// مزامنة الموديلات
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Models synced"))
  .catch(err => console.error("❌ Sync error:", err));

// Routes للمستخدمين
app.get("/users", async (req, res) => {
  const users = await User.findAll({ include: Task });
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Routes للمهام
app.get("/tasks", async (req, res) => {
  const tasks = await Task.findAll({ include: User });
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// بدء السيرفر
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
