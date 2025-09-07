import { prisma } from "../index";

export const getAllTeams = async () => {
  return prisma.team.findMany({ include: { members: true } });
};

export const getTeamById = async (id: number) => {
  return prisma.team.findUnique({ where: { id }, include: { members: true } });
};

export const createTeam = async (data: { name: string }) => {
  return prisma.team.create({ data });
};

export const updateTeam = async (id: number, data: Partial<{ name: string }>) => {
  return prisma.team.update({ where: { id }, data });
};

export const deleteTeam = async (id: number) => {
  return prisma.team.delete({ where: { id } });
};
