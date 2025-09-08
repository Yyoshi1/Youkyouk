import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// 
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

export default router;
