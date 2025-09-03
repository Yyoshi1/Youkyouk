import express from "express"
import { OrderController } from "../controllers/seller/OrderController.js"

const router = express.Router()

router.get("/orders", OrderController.index)
router.post("/orders", OrderController.create)
router.patch("/orders/:id", OrderController.update)
router.delete("/orders/:id", OrderController.delete)

export default router
