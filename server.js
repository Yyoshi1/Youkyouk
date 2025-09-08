import express from 'express';
import { sequelize } from './config/db.js';
import User from './models/User.js';

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.create({ name, email });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const start = async () => {
  await sequelize.sync({ alter: true });
  console.log("Database synced successfully");
  app.listen(4000, () => console.log('Server running on http://localhost:4000'));
};

start();
