// backend/controllers/seller/OrderController.js
import { Order } from "../../models/seller/Order"

export default {
  async index(req, res) {
    const orders = await Order.query().where({ seller_id: req.params.sellerId }).withGraphFetched("items")
    res.json(orders)
  },

  async show(req, res) {
    const order = await Order.query().findById(req.params.id).withGraphFetched("[items, payments]")
    if (!order) return res.status(404).json({ error: "Order not found" })
    res.json(order)
  },

  async update(req, res) {
    const order = await Order.query().patchAndFetchById(req.params.id, req.body)
    res.json(order)
  }
}
