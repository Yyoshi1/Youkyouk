import express from "express"
import { getAddons, toggleAddon } from "../../controllers/seller/addons.js"

const router = express.Router()

router.get("/", getAddons)                // 
router.post("/:id/toggle", toggleAddon)   // 

export default router
