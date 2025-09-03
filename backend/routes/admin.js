import express from "express"
import { UserController } from "../controllers/admin/UserController.js"

const router = express.Router()

router.get("/users", UserController.index)
router.post("/users", UserController.create)
router.patch("/users/:id", UserController.update)
router.delete("/users/:id", UserController.delete)

export default router
