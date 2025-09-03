import express from 'express'
import { Order } from '../models/Order'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

// List all orders
router.get('/', authMiddleware, async (req, res) => {
  const orders = await Order.query()
    .withGraphFetched('[user, items.[product]]')
    .orderBy('created_at', 'desc')
  res.json(orders)
})

// Update order status
router.put('/:id', authMiddleware, async (req, res) => {
  const updated = await Order.query()
    .patchAndFetchById(req.params.id, { status: req.body.status })
  res.json(updated)
})

export default router
