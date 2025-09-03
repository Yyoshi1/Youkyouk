import express from 'express'
import { Setting } from '../models/Setting'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

router.get('/', authMiddleware, async (req, res) => {
  const setting = await Setting.query().first()
  res.json(setting)
})

router.put('/', authMiddleware, async (req, res) => {
  const updated = await Setting.query().patchAndFetchById(1, req.body)
  res.json(updated)
})

export default router
