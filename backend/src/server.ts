import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import projectsRoutes from './routes/projects'
import tasksRoutes from './routes/tasks'
import teamsRoutes from './routes/teams'
import notificationsRoutes from './routes/notifications'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/projects', projectsRoutes)
app.use('/api/tasks', tasksRoutes)
app.use('/api/teams', teamsRoutes)
app.use('/api/notifications', notificationsRoutes)

// Connect to MongoDB
const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/youkyouk'

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => console.error('MongoDB connection error:', err))
