const express = require('express');
const router = express.Router();
const { createUser } = require('../models/user');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
