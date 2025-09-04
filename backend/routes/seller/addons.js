// backend/routes/seller/addons.js
const express = require("express");
const router = express.Router();
const YoukyoukAddon = require("../../models/YoukyoukAddon");

// 
router.get("/", async (req, res) => {
  try {
    const addons = await YoukyoukAddon.findAll();
    res.json(addons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 
router.get("/:id", async (req, res) => {
  try {
    const addon = await YoukyoukAddon.findByPk(req.params.id);
    if (!addon) return res.status(404).json({ error: "Addon not found" });
    res.json(addon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 
router.post("/", async (req, res) => {
  try {
    const addon = await YoukyoukAddon.create(req.body);
    res.status(201).json(addon);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 
router.put("/:id", async (req, res) => {
  try {
    const addon = await YoukyoukAddon.findByPk(req.params.id);
    if (!addon) return res.status(404).json({ error: "Addon not found" });
    await addon.update(req.body);
    res.json(addon);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 
router.delete("/:id", async (req, res) => {
  try {
    const addon = await YoukyoukAddon.findByPk(req.params.id);
    if (!addon) return res.status(404).json({ error: "Addon not found" });
    await addon.destroy();
    res.json({ message: "Addon deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
