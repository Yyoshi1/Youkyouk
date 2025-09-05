import { Router } from 'express'
import {
  getProjects, getProject, createProject, updateProject, deleteProject
} from '../controllers/projectController'

const router = Router()

router.get('/', getProjects)
router.get('/:id', getProject)
router.post('/', createProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

export default router
