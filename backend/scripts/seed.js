const { User, Role } = require('../models');

async function seed() {
  try {
    const adminRole = await Role.create({ name: 'admin' });
    await User.create({ name: 'Admin', email: 'admin@youkyouk.com', roleId: adminRole.id, password: 'admin123' });
    console.log("Seeding completed!");
  } catch (err) {
    console.error("Seeding failed:", err);
  }
}

seed();
