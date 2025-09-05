import { Router } from 'express'
import {
  getNotifications, getNotification, createNotification, updateNotification, deleteNotification
} from '../controllers/notificationController'

const router = Router()

router.get('/', getNotifications)
router.get('/:id', getNotification)
router.post('/', createNotification)
router.put('/:id', updateNotification)
router.delete('/:id', deleteNotification)

export default router
