import { Order } from "../../models/seller/Order.js"

export class OrdersController {
  static async list(req, res) {
    const sellerId = req.params.sellerId
    const orders = await Order.query().where("seller_id", sellerId)
      .withGraphFetched('items')
    res.json(orders)
  }

  static async updateStatus(req, res) {
    const id = req.params.id
    const { status } = req.body
    const order = await Order.query().patchAndFetchById(id, { status })
    res.json(order)
  }
}
