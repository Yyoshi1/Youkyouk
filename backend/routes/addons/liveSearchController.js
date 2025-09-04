import express from "express"
import { LiveSearchController } from "../../controllers/addons/LiveSearchController.js"
const router = express.Router()
router.get("/", LiveSearchController.get)
router.post("/update", LiveSearchController.update)
export default router
