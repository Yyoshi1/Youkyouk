import express from "express"
import { YoukyoukAddon } from "../../models/YoukyoukAddon.js"

const router = express.Router()

// 
router.get("/", async (req, res) => {
  const addons = await YoukyoukAddon.query().where({ seller_id: req.user.id })
  res.json(addons)
})

// 
router.post("/:id/toggle", async (req, res) => {
  const addon = await YoukyoukAddon.query().findById(req.params.id)
  if (!addon) return res.status(404).json({ error: "Addon not found" })
  addon.active = !addon.active
  await addon.$query().patch({ active: addon.active })
  res.json(addon)
})

export default router
