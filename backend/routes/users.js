import express from 'express'
import { User } from '../models/User'
import { authMiddleware } from '../middlewares/auth'

const router = express.Router()

// List users
router.get('/', authMiddleware, async (req, res) => {
  const users = await User.query()
  res.json(users)
})

// Add user
router.post('/', authMiddleware, async (req, res) => {
  const user = await User.query().insert(req.body)
  res.json(user)
})

// Update user
router.put('/:id', authMiddleware, async (req, res) => {
  const updated = await User.query().patchAndFetchById(req.params.id, req.body)
  res.json(updated)
})

// Delete user
router.delete('/:id', authMiddleware, async (req, res) => {
  await User.query().deleteById(req.params.id)
  res.json({ success: true })
})

export default router
