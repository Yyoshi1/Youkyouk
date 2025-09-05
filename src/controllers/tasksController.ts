import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({ include: { project: true, assignee: true } })
  res.json(tasks)
}

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params
  const task = await prisma.task.findUnique({ where: { id: Number(id) }, include: { project: true, assignee: true } })
  res.json(task)
}

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, projectId, assigneeId } = req.body
  const task = await prisma.task.create({ data: { title, description, status, projectId, assigneeId } })
  res.json(task)
}

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, description, status, assigneeId } = req.body
  const task = await prisma.task.update({ where: { id: Number(id) }, data: { title, description, status, assigneeId } })
  res.json(task)
}

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params
  await prisma.task.delete({ where: { id: Number(id) } })
  res.json({ message: 'Task deleted' })
}
