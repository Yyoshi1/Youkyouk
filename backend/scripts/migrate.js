const { sequelize } = require('../models');

async function migrate() {
  try {
    await sequelize.sync({ force: true });
    console.log("Database migrated successfully!");
  } catch (err) {
    console.error("Migration failed:", err);
  }
}

migrate();
