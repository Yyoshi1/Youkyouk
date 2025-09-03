import { Promotion } from "../../models/seller/Promotion.js"

export class PromotionsController {
  static async list(req, res) {
    const sellerId = req.params.sellerId
    const promotions = await Promotion.query().where("seller_id", sellerId)
    res.json(promotions)
  }

  static async create(req, res) {
    const sellerId = req.params.sellerId
    const promo = await Promotion.query().insert({ ...req.body, seller_id: sellerId })
    res.json(promo)
  }
}
