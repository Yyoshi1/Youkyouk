const express = require("express");
const router = express.Router();
const addons = require("../data/addonsMock"); // Import mock data

// GET all addons
router.get("/", (req, res) => {
  res.json(addons);
});

module.exports = router;
