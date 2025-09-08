import express from 'express';
import { sequelize } from './config/db.js';
import Task from './models/Task.js';

const app = express();
app.use(express.json());

// Routes
app.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.update(req.body);
  res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  await task.destroy();
  res.json({ message: 'Task deleted' });
});

// Start server
const startServer = async () => {
  try {
    await sequelize.sync(); // إنشاء الجداول إذا ما موجودة
    console.log('Database synced.');
    app.listen(4000, () => console.log('Server running on http://localhost:4000'));
  } catch (err) {
    console.error('Error syncing database:', err);
  }
};

startServer();
