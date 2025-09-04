import express from "express"
import { getPageLayout, toggleAddon } from "../controllers/youkyoukController.js"
const router = express.Router()

// 
router.get("/page-layout", getPageLayout)

// 
router.post("/addon/:id/toggle", toggleAddon)

export default router
