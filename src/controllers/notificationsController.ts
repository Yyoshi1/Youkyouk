import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getNotifications = async (req: Request, res: Response) => {
  const notifications = await prisma.notification.findMany({ where: { userId: req.user.id } })
  res.json(notifications)
}

export const markAsRead = async (req: Request, res: Response) => {
  const { id } = req.params
  const notification = await prisma.notification.update({
    where: { id: Number(id) },
    data: { read: true },
  })
  res.json(notification)
}
