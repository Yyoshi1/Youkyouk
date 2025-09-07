import { Router } from "express";
import * as projectController from "../controllers/projectController";

const router = Router();

router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProject);
router.post("/", projectController.createProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

export default router;
