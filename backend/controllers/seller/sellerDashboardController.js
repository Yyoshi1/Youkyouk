import { Seller } from "../../models/seller/Seller.js"
import { Product } from "../../models/seller/Product.js"
import { Order } from "../../models/seller/Order.js"
import { Notification } from "../../models/seller/Notification.js"
import { Plugin } from "../../models/seller/Plugin.js"

export class SellerDashboardController {
  static async getDashboard(req, res) {
    try {
      const sellerId = req.params.sellerId
      const seller = await Seller.query().findById(sellerId)
        .withGraphFetched('[products, orders, notifications, plugins]')
      res.json(seller)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
}
