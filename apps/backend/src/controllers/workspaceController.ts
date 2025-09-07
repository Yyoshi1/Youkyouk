import { Request, Response } from "express";
import * as workspaceService from "../services/workspaceService";

export const getWorkspaces = async (req: Request, res: Response) => {
  const workspaces = await workspaceService.getAllWorkspaces();
  res.json(workspaces);
};

export const getWorkspace = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const workspace = await workspaceService.getWorkspaceById(id);
  res.json(workspace);
};

export const createWorkspace = async (req: Request, res: Response) => {
  const { name } = req.body;
  const workspace = await workspaceService.createWorkspace({ name });
  res.status(201).json(workspace);
};

export const updateWorkspace = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const workspace = await workspaceService.updateWorkspace(id, req.body);
  res.json(workspace);
};

export const deleteWorkspace = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await workspaceService.deleteWorkspace(id);
  res.status(204).send();
};
