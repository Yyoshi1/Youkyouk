// backend/server.js
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const path = require('path')

// ----------------------
// Sync language files automatically
// ----------------------
require('./i18nSync')

// ----------------------
// Express setup
// ----------------------
const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ----------------------
// PostgreSQL database setup
// ----------------------
const pool = new Pool({
  user: process.env.DB_USER || 'youkyouk_user',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'youkyouk_db',
  password: process.env.DB_PASS || 'password',
  port: process.env.DB_PORT || 5432
})

pool.connect()
  .then(() => console.log('🔹 Database connection successful'))
  .catch(err => console.error('❌ Database connection error:', err))

// ----------------------
// Test API routes
// ----------------------
app.get('/', (req, res) => {
  res.send('Youkyouk Server is running successfully! 🚀')
})

app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects LIMIT 10')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error fetching projects' })
  }
})

app.get('/api/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks LIMIT 10')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error fetching tasks' })
  }
})

// ----------------------
// Serve frontend static files
// ----------------------
app.use(express.static(path.join(__dirname, '../frontend')))

// ----------------------
// Start server
// ----------------------
app.listen(PORT, () => {
  console.log(`🚀 Youkyouk Server is running on port: ${PORT}`)
})
