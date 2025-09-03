import { Review } from "../../models/admin/Review"

export class ReviewController {
  static async list(req, res) {
    const reviews = await Review.query()
    res.json(reviews)
  }

  static async get(req, res) {
    const review = await Review.query().findById(req.params.id)
    res.json(review)
  }

  static async delete(req, res) {
    await Review.query().deleteById(req.params.id)
    res.json({ success: true })
  }
}
