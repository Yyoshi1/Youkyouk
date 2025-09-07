import { Request, Response } from "express";
import * as projectService from "../services/projectService";

export const getProjects = async (req: Request, res: Response) => {
  const projects = await projectService.getAllProjects();
  res.json(projects);
};

export const getProject = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const project = await projectService.getProjectById(id);
  res.json(project);
};

export const createProject = async (req: Request, res: Response) => {
  const { name, workspaceId } = req.body;
  const project = await projectService.createProject({ name, workspaceId });
  res.status(201).json(project);
};

export const updateProject = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const project = await projectService.updateProject(id, req.body);
  res.json(project);
};

export const deleteProject = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await projectService.deleteProject(id);
  res.status(204).send();
};
