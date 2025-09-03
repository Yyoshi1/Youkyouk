import express from 'express'
import { Product } from '../models/Product'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

// List products
router.get('/', authMiddleware, async (req, res) => {
  const products = await Product.query().withGraphFetched('category')
  res.json(products)
})

// Add product
router.post('/', authMiddleware, async (req, res) => {
  const product = await Product.query().insert(req.body)
  res.json(product)
})

// Update product
router.put('/:id', authMiddleware, async (req, res) => {
  const updated = await Product.query().patchAndFetchById(req.params.id, req.body)
  res.json(updated)
})

// Delete product
router.delete('/:id', authMiddleware, async (req, res) => {
  await Product.query().deleteById(req.params.id)
  res.json({ success: true })
})

export default router
