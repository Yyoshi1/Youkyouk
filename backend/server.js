const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mock database connection
let dbConfig = {
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'youkyouk_db'
};

// Routes
app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, name: 'Project Alpha', team: 'Team A' },
    { id: 2, name: 'Project Beta', team: 'Team B' }
  ]);
});

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Task 1', status: 'In Progress', assignedTo: 'User 1' },
    { id: 2, title: 'Task 2', status: 'Completed', assignedTo: 'User 2' }
  ]);
});

app.get('/api/teams', (req, res) => {
  res.json(['Team A', 'Team B', 'Team C']);
});

app.get('/api/users', (req, res) => {
  res.json(['Admin', 'User 1', 'User 2', 'User 3']);
});

app.get('/api/reports', (req, res) => {
  res.json([
    { name: 'Weekly Progress', chart: '[Chart Placeholder]' },
    { name: 'Team Performance', chart: '[Chart Placeholder]' }
  ]);
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Youkyouk backend running on port ${PORT}`);
});
