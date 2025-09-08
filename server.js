import express from 'express';
import sequelize from './config/db.js';
import User from './models/User.js';

const app = express();
app.use(express.json());

// Route example
app.get('/', (req, res) => {
  res.send('Youkyouk Backend is running!');
});

// Sync database and start server
const PORT = 4000;
sequelize.sync({ force: false }) // force: false to avoid dropping tables
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database sync error:', err);
  });
