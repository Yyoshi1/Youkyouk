import { prisma } from "../index";

export const getAllUsers = async () => {
  return prisma.user.findMany({ include: { teams: true } });
};

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({ where: { id }, include: { teams: true } });
};

export const createUser = async (data: { name: string; email: string; password: string }) => {
  return prisma.user.create({ data });
};

export const updateUser = async (id: number, data: Partial<{ name: string; email: string; password: string }>) => {
  return prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({ where: { id } });
};
