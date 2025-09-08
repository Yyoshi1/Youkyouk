import express from 'express';
import Team from '../models/Team.js';

const router = express.Router();

// 
router.get('/', async (req, res) => {
  const teams = await Team.findAll();
  res.json(teams);
});

export default router;
