// backend/controllers/seller/ReviewController.js
import { Review } from "../../models/seller/Review"

export default {
  async index(req, res) {
    const reviews = await Review.query()
      .where({ seller_id: req.params.sellerId })
      .withGraphFetched("[product, customer]")
    res.json(reviews)
  },

  async show(req, res) {
    const review = await Review.query().findById(req.params.id).withGraphFetched("[product, customer]")
    if (!review) return res.status(404).json({ error: "Review not found" })
    res.json(review)
  },

  async create(req, res) {
    const review = await Review.query().insert(req.body)
    res.status(201).json(review)
  },

  async update(req, res) {
    const review = await Review.query().patchAndFetchById(req.params.id, req.body)
    res.json(review)
  },

  async delete(req, res) {
    await Review.query().deleteById(req.params.id)
    res.status(204).end()
  }
}
