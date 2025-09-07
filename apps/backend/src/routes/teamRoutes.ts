import { Router } from "express";
import * as teamController from "../controllers/teamController";

const router = Router();

router.get("/", teamController.getTeams);
router.get("/:id", teamController.getTeam);
router.post("/", teamController.createTeam);
router.put("/:id", teamController.updateTeam);
router.delete("/:id", teamController.deleteTeam);

export default router;
