// backend/routes/seller/addons.js
const express = require('express');
const router = express.Router();
const { YoukyoukAddon } = require('../../models/youkyoukAddon');

// GET all addons
router.get('/', async (req, res) => {
  try {
    const addons = await YoukyoukAddon.findAll();
    res.json(addons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single addon by ID
router.get('/:id', async (req, res) => {
  try {
    const addon = await YoukyoukAddon.findByPk(req.params.id);
    if (!addon) return res.status(404).json({ error: 'Addon not found' });
    res.json(addon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE a new addon
router.post('/', async (req, res) => {
  try {
    const { name, description, isActive } = req.body;
    const newAddon = await YoukyoukAddon.create({ name, description, isActive });
    res.status(201).json(newAddon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE an addon
router.put('/:id', async (req, res) => {
  try {
    const { name, description, isActive } = req.body;
    const addon = await YoukyoukAddon.findByPk(req.params.id);
    if (!addon) return res.status(404).json({ error: 'Addon not found' });
    await addon.update({ name, description, isActive });
    res.json(addon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE an addon
router.delete('/:id', async (req, res) => {
  try {
    const addon = await YoukyoukAddon.findByPk(req.params.id);
    if (!addon) return res.status(404).json({ error: 'Addon not found' });
    await addon.destroy();
    res.json({ message: 'Addon deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
