const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const accountsRoutes = require("./routes/accounts");
require("dotenv").config();
const sequelize = require("./db");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/accounts", accountsRoutes);

// Test Route
app.get("/", (req, res) => res.send("Youkyouk Backend Running"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
});
