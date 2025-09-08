import express from 'express';
import { sequelize } from './config/db.js';
import { User } from './models/User.js';

const app = express();
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Create a user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Sync database & start server
const PORT = 4000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
