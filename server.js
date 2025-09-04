require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const http = require('http');
const { initSockets } = require('./sockets/tripSocket');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const driverRoutes = require('./routes/drivers');
const tripRoutes = require('./routes/trips');
const sellerAddonsRoutes = require('./routes/seller/addons'); // ✅ جديد

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/seller/addons', sellerAddonsRoutes); // ✅ جديد

// Initialize WebSocket
initSockets(server);

const PORT = process.env.PORT || 4000;
sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
});
