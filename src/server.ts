import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth'
import projectsRoutes from './routes/projects'
import tasksRoutes from './routes/tasks'
import teamsRoutes from './routes/teams'
import notificationsRoutes from './routes/notifications'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/projects', projectsRoutes)
app.use('/api/tasks', tasksRoutes)
app.use('/api/teams', teamsRoutes)
app.use('/api/notifications', notificationsRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))
