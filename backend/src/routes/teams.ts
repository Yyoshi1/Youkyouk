import { Router } from 'express'
import {
  getTeams, getTeam, createTeam, updateTeam, deleteTeam
} from '../controllers/teamController'

const router = Router()

router.get('/', getTeams)
router.get('/:id', getTeam)
router.post('/', createTeam)
router.put('/:id', updateTeam)
router.delete('/:id', deleteTeam)

export default router
