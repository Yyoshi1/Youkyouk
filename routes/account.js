const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

// GET all accounts
router.get("/", async (req, res) => {
  const accounts = await Account.findAll();
  res.json(accounts);
});

// CREATE a new account
router.post("/", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const account = await Account.create({ username, email, password, role });
    res.json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
