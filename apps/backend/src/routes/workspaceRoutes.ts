import { Router } from "express";
import * as workspaceController from "../controllers/workspaceController";

const router = Router();

router.get("/", workspaceController.getWorkspaces);
router.get("/:id", workspaceController.getWorkspace);
router.post("/", workspaceController.createWorkspace);
router.put("/:id", workspaceController.updateWorkspace);
router.delete("/:id", workspaceController.deleteWorkspace);

export default router;
