import express from 'express'
import { getTeams, getTeam, createTeam, updateTeam, deleteTeam } from '../controllers/teamsController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', authMiddleware(), getTeams)
router.get('/:id', authMiddleware(), getTeam)
router.post('/', authMiddleware(['admin']), createTeam)
router.put('/:id', authMiddleware(['admin']), updateTeam)
router.delete('/:id', authMiddleware(['admin']), deleteTeam)

export default router
