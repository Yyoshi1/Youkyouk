const pool = require('../config/database');

async function createUser(user) {
  const { name, email, password, role } = user;
  const query = `
    INSERT INTO users (name, email, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, email, role;
  `;
  const values = [name, email, password, role];
  const res = await pool.query(query, values);
  return res.rows[0];
}

module.exports = { createUser };
