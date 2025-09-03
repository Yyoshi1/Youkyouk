import { Order } from "../models/Order"
import { OrderItem } from "../models/OrderItem"
import { Product } from "../models/Product"

export default class OrderController {
  static async index(req, res) {
    const orders = await Order.query()
      .where("user_id", req.user.id)
      .withGraphFetched("[items.product, payments]")
    res.json(orders)
  }

  static async show(req, res) {
    const order = await Order.query()
      .findById(req.params.id)
      .withGraphFetched("[items.product, payments]")
    if (!order) return res.status(404).json({ error: "Order not found" })
    res.json(order)
  }

  static async create(req, res) {
    try {
      const { items } = req.body
      let total = 0

      for (const item of items) {
        const product = await Product.query().findById(item.product_id)
        if (!product || product.stock < item.quantity) {
          return res.status(400).json({ error: "Invalid product or stock" })
        }
        total += product.price * item.quantity
      }

      const order = await Order.query().insertAndFetch({
        user_id: req.user.id,
        total,
        status: "pending",
      })

      for (const item of items) {
        await OrderItem.query().insert({
          order_id: order.id,
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
        })
      }

      res.json(order)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}
