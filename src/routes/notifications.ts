import express from 'express'
import { getNotifications, markAsRead } from '../controllers/notificationsController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', authMiddleware(), getNotifications)
router.put('/:id/read', authMiddleware(), markAsRead)

export default router
