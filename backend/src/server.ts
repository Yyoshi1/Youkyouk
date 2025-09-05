import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks'
import teamRoutes from './routes/teams'
import notificationRoutes from './routes/notifications'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/teams', teamRoutes)
app.use('/api/notifications', notificationRoutes)

// MongoDB connection
mongoose.connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/youkyouk')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
