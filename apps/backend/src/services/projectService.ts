import { prisma } from "../index";

export const getAllProjects = async () => {
  return prisma.project.findMany({ include: { workspace: true } });
};

export const getProjectById = async (id: number) => {
  return prisma.project.findUnique({ where: { id }, include: { workspace: true } });
};

export const createProject = async (data: { name: string; workspaceId: number }) => {
  return prisma.project.create({ data });
};

export const updateProject = async (id: number, data: Partial<{ name: string; workspaceId: number }>) => {
  return prisma.project.update({ where: { id }, data });
};

export const deleteProject = async (id: number) => {
  return prisma.project.delete({ where: { id } });
};
