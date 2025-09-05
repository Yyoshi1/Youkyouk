import express from 'express'
import { getProjects, getProject, createProject, updateProject, deleteProject } from '../controllers/projectsController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', authMiddleware(), getProjects)
router.get('/:id', authMiddleware(), getProject)
router.post('/', authMiddleware(['admin']), createProject)
router.put('/:id', authMiddleware(['admin']), updateProject)
router.delete('/:id', authMiddleware(['admin']), deleteProject)

export default router
