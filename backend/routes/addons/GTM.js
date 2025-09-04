import express from "express"
import { GTMController } from "../../controllers/Addons/GTMController.js"
const router = express.Router()

router.get("/", GTMController.getSettings)
router.post("/update", GTMController.updateSettings)

export default router
