import { Order } from "../../models/seller/Order"

export class OrderController {
  static async list(req, res) {
    const orders = await Order.query().where("seller_id", req.user.id)
    res.json(orders)
  }

  static async get(req, res) {
    const order = await Order.query().findById(req.params.id)
    res.json(order)
  }

  static async updateStatus(req, res) {
    const order = await Order.query().patchAndFetchById(req.params.id, { status: req.body.status })
    res.json(order)
  }
}
