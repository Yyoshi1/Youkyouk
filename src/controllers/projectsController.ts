import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getProjects = async (req: Request, res: Response) => {
  const projects = await prisma.project.findMany({ include: { tasks: true, owner: true } })
  res.json(projects)
}

export const getProject = async (req: Request, res: Response) => {
  const { id } = req.params
  const project = await prisma.project.findUnique({ where: { id: Number(id) }, include: { tasks: true } })
  res.json(project)
}

export const createProject = async (req: Request, res: Response) => {
  const { name, description, ownerId } = req.body
  const project = await prisma.project.create({ data: { name, description, ownerId } })
  res.json(project)
}

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, description } = req.body
  const project = await prisma.project.update({ where: { id: Number(id) }, data: { name, description } })
  res.json(project)
}

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params
  await prisma.project.delete({ where: { id: Number(id) } })
  res.json({ message: 'Project deleted' })
}
