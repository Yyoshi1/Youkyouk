import express from "express"
import { GTMController } from "../../controllers/addons/GTMController.js"
const router = express.Router()
router.get("/", GTMController.get)
router.post("/update", GTMController.update)
export default router
