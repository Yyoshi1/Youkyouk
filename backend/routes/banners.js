import express from 'express'
import { Banner } from '../models/Banner'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

router.get('/', authMiddleware, async (req, res) => {
  const banners = await Banner.query()
  res.json(banners)
})

router.post('/', authMiddleware, async (req, res) => {
  const banner = await Banner.query().insert(req.body)
  res.json(banner)
})

router.put('/:id', authMiddleware, async (req, res) => {
  const updated = await Banner.query().patchAndFetchById(req.params.id, req.body)
  res.json(updated)
})

router.delete('/:id', authMiddleware, async (req, res) => {
  await Banner.query().deleteById(req.params.id)
  res.json({ success:true })
})

export default router
