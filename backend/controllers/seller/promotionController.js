// backend/controllers/seller/PromotionController.js
import { Promotion } from "../../models/seller/Promotion"

export default {
  async index(req, res) {
    const promotions = await Promotion.query().where({ seller_id: req.params.sellerId })
    res.json(promotions)
  },

  async create(req, res) {
    const promotion = await Promotion.query().insert(req.body)
    res.status(201).json(promotion)
  },

  async update(req, res) {
    const promotion = await Promotion.query().patchAndFetchById(req.params.id, req.body)
    res.json(promotion)
  },

  async delete(req, res) {
    await Promotion.query().deleteById(req.params.id)
    res.status(204).end()
  }
}
