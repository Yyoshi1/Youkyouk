import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTeams = async (req: Request, res: Response) => {
  const teams = await prisma.team.findMany({ include: { members: true } })
  res.json(teams)
}

export const getTeam = async (req: Request, res: Response) => {
  const { id } = req.params
  const team = await prisma.team.findUnique({ where: { id: Number(id) }, include: { members: true } })
  res.json(team)
}

export const createTeam = async (req: Request, res: Response) => {
  const { name, memberIds } = req.body
  const team = await prisma.team.create({
    data: {
      name,
      members: { connect: memberIds.map((id: number) => ({ id })) },
    },
    include: { members: true },
  })
  res.json(team)
}

export const updateTeam = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, memberIds } = req.body
  const team = await prisma.team.update({
    where: { id: Number(id) },
    data: {
      name,
      members: { set: memberIds.map((id: number) => ({ id })) },
    },
    include: { members: true },
  })
  res.json(team)
}

export const deleteTeam = async (req: Request, res: Response) => {
  const { id } = req.params
  await prisma.team.delete({ where: { id: Number(id) } })
  res.json({ message: 'Team deleted' })
}
