// backend/controllers/seller/SellerController.js
import { Seller } from "../../models/seller/Seller"

export default {
  async index(req, res) {
    const sellers = await Seller.query().withGraphFetched("[products, orders, promotions]")
    res.json(sellers)
  },

  async show(req, res) {
    const seller = await Seller.query().findById(req.params.id).withGraphFetched("[products, orders, promotions, notifications]")
    if (!seller) return res.status(404).json({ error: "Seller not found" })
    res.json(seller)
  },

  async create(req, res) {
    const seller = await Seller.query().insert(req.body)
    res.status(201).json(seller)
  },

  async update(req, res) {
    const seller = await Seller.query().patchAndFetchById(req.params.id, req.body)
    res.json(seller)
  },

  async delete(req, res) {
    await Seller.query().deleteById(req.params.id)
    res.status(204).end()
  }
}
