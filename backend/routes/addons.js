const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Set upload destination
const upload = multer({
  dest: path.join(__dirname, "../uploads/addons"),
});

router.post("/upload", upload.single("addon"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  // Here you can save addon info in the database if needed
  res.json({ message: "Addon uploaded successfully", file: req.file });
});

module.exports = router;
