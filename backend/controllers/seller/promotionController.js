import { Promotion } from "../../models/seller/Promotion"

export class PromotionController {
  static async list(req, res) {
    const promotions = await Promotion.query().where("seller_id", req.user.id)
    res.json(promotions)
  }

  static async create(req, res) {
    const promo = await Promotion.query().insert({ ...req.body, seller_id: req.user.id })
    res.json(promo)
  }

  static async update(req, res) {
    const promo = await Promotion.query().patchAndFetchById(req.params.id, req.body)
    res.json(promo)
  }

  static async delete(req, res) {
    await Promotion.query().deleteById(req.params.id)
    res.json({ success: true })
  }
}
