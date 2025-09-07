import { prisma } from "../index";

export const getAllWorkspaces = async () => {
  return prisma.workspace.findMany({ include: { projects: true } });
};

export const getWorkspaceById = async (id: number) => {
  return prisma.workspace.findUnique({ where: { id }, include: { projects: true } });
};

export const createWorkspace = async (data: { name: string }) => {
  return prisma.workspace.create({ data });
};

export const updateWorkspace = async (id: number, data: Partial<{ name: string }>) => {
  return prisma.workspace.update({ where: { id }, data });
};

export const deleteWorkspace = async (id: number) => {
  return prisma.workspace.delete({ where: { id } });
};
