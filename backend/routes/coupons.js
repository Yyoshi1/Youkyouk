import express from 'express'
import { Coupon } from '../models/Coupon'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

router.get('/', authMiddleware, async (req, res) => {
  const coupons = await Coupon.query().withGraphFetched('products')
  res.json(coupons)
})

router.post('/', authMiddleware, async (req, res) => {
  const coupon = await Coupon.query().insertGraph(req.body)
  res.json(coupon)
})

router.put('/:id', authMiddleware, async (req, res) => {
  const updated = await Coupon.query().upsertGraph({ id: req.params.id, ...req.body })
  res.json(updated)
})

router.delete('/:id', authMiddleware, async (req, res) => {
  await Coupon.query().deleteById(req.params.id)
  res.json({ success: true })
})

export default router
