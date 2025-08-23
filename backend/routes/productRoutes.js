const express = require("express");
const router = express.Router();
const { createProduct, getProducts } = require("../controllers/productController");

// Example middleware for authentication
const authMiddleware = require("../accounts/authMiddleware");

router.post("/", authMiddleware, createProduct);
router.get("/", getProducts);

module.exports = router;
