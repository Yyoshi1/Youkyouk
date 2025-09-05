import express from 'express'
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/tasksController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', authMiddleware(), getTasks)
router.get('/:id', authMiddleware(), getTask)
router.post('/', authMiddleware(['admin']), createTask)
router.put('/:id', authMiddleware(['admin']), updateTask)
router.delete('/:id', authMiddleware(['admin']), deleteTask)

export default router
