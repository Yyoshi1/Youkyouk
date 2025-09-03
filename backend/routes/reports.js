import express from 'express'
import { Order } from '../models/Order'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

router.get('/', authMiddleware, async (req, res) => {
  const { from, to } = req.query
  let query = Order.query().withGraphFetched('customer')
  if(from) query = query.where('created_at','>=',from)
  if(to) query = query.where('created_at','<=',to)
  const orders = await query.orderBy('created_at','desc')
  res.json(orders)
})

export default router
