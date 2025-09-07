import { Request, Response } from "express";
import * as userService from "../services/userService";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await userService.getUserById(id);
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await userService.createUser({ name, email, password });
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await userService.updateUser(id, req.body);
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await userService.deleteUser(id);
  res.status(204).send();
};
