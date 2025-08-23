const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const sequelize = require("./db");
const accountsRoutes = require("./routes/accounts");
const domainsRoutes = require("./routes/domains"); // existing
const addonsRoutes = require("./routes/addons");   // add this line

app.use(cors());
app.use(bodyParser.json());

// Connect Routes
app.use("/api/accounts", accountsRoutes);
app.use("/api/domains", domainsRoutes);   // existing
app.use("/api/addons", addonsRoutes);     // add this line

// Test Route
app.get("/", (req, res) => res.send("Youkyouk Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // auto-create tables
    console.log("Database connected and synced successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
});
