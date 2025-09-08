import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// 
router.post('/login', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'Login successful', user });
});

export default router;
