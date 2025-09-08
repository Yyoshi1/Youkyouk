import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/db.js';

// Import models
import User from './models/User.js';
import Team from './models/Team.js';
import Project from './models/Project.js';
import Task from './models/Task.js';
import Notification from './models/Notification.js';

// Import routes
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import userRoutes from './routes/userRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notifications', notificationRoutes);

// Server test page
app.get('/', (req, res) => {
  res.send('Youkyouk Backend is running...');
});

// Define model relationships
Team.hasMany(Project, { foreignKey: 'teamId' });
Project.belongsTo(Team, { foreignKey: 'teamId' });

Project.hasMany(Task, { foreignKey: 'projectId' });
Task.belongsTo(Project, { foreignKey: 'projectId' });

User.hasMany(Notification, { foreignKey: 'userId' });
Notification.belongsTo(User, { foreignKey: 'userId' });

// Start server and sync database
const PORT = process.env.PORT || 4000;

sequelize.sync({ force: true }) // force: true to sync and recreate tables
  .then(async () => {
    console.log('Database synced.');

    // Seed fake data
    const team1 = await Team.create({ name: 'Team Alpha' });
    const team2 = await Team.create({ name: 'Team Beta' });

    const project1 = await Project.create({ name: 'Project One', description: 'Demo project 1', teamId: team1.id });
    const project2 = await Project.create({ name: 'Project Two', description: 'Demo project 2', teamId: team2.id });

    const user1 = await User.create({ name: 'John Doe', email: 'john@example.com', password: '123456', role: 'Admin' });
    const user2 = await User.create({ name: 'Jane Smith', email: 'jane@example.com', password: '123456', role: 'Member' });

    await Task.create({ title: 'Setup Backend', description: 'Initialize server and database', projectId: project1.id, status: 'Pending' });
    await Task.create({ title: 'Design UI', description: 'Create frontend layout', projectId: project2.id, status: 'In Progress' });

    await Notification.create({ message: 'Welcome to Youkyouk!', userId: user1.id });
    await Notification.create({ message: 'Your first task is assigned.', userId: user2.id });

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Database connection failed:', err));
