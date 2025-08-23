const express = require("express");
const router = express.Router();
const { createPayment, getPayments } = require("../controllers/paymentController");
const authMiddleware = require("../accounts/authMiddleware");

router.post("/", authMiddleware, createPayment);
router.get("/", authMiddleware, getPayments);

module.exports = router;
