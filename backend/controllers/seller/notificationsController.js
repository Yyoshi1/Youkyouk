import { Notification } from "../../models/seller/Notification.js"

export class NotificationsController {
  static async list(req, res) {
    const sellerId = req.params.sellerId
    const notifications = await Notification.query().where("seller_id", sellerId)
    res.json(notifications)
  }

  static async markAsRead(req, res) {
    const id = req.params.id
    await Notification.query().findById(id).patch({ read: true })
    res.json({ success: true })
  }
}
