import express from 'express'
import { Category } from '../models/Category'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

// List categories
router.get('/', authMiddleware, async (req, res) => {
  const categories = await Category.query()
  res.json(categories)
})

// Add category
router.post('/', authMiddleware, async (req, res) => {
  const category = await Category.query().insert(req.body)
  res.json(category)
})

// Update category
router.put('/:id', authMiddleware, async (req, res) => {
  const updated = await Category.query().patchAndFetchById(req.params.id, req.body)
  res.json(updated)
})

// Delete category
router.delete('/:id', authMiddleware, async (req, res) => {
  await Category.query().deleteById(req.params.id)
  res.json({ success: true })
})

export default router
