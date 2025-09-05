import { Request, Response } from 'express'
import Notification from '../models/Notification'

// Get all notifications
export const getNotifications = async (req: Request, res: Response) => {
  try {
    const notifications = await Notification.find()
    res.json(notifications)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err })
  }
}

// Get single notification
export const getNotification = async (req: Request, res: Response) => {
  try {
    const notification = await Notification.findById(req.params.id)
    if (!notification) return res.status(404).json({ message: 'Notification not found' })
    res.json(notification)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err })
  }
}

// Create notification
export const createNotification = async (req: Request, res: Response) => {
  try {
    const notification = new Notification(req.body)
    await notification.save()
    res.status(201).json(notification)
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err })
  }
}

// Update notification
export const updateNotification = async (req: Request, res: Response) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!notification) return res.status(404).json({ message: 'Notification not found' })
    res.json(notification)
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err })
  }
}

// Delete notification
export const deleteNotification = async (req: Request, res: Response) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id)
    if (!notification) return res.status(404).json({ message: 'Notification not found' })
    res.json({ message: 'Notification deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err })
  }
}
