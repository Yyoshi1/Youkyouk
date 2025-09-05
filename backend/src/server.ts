import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks'
import teamRoutes from './routes/teams'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/teams', teamRoutes)

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`)
})
