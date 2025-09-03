// backend/controllers/seller/NotificationController.js
import { Notification } from "../../models/seller/Notification"

export default {
  async index(req, res) {
    const notifications = await Notification.query().where({ seller_id: req.params.sellerId })
    res.json(notifications)
  },

  async markAsRead(req, res) {
    const notification = await Notification.query().patchAndFetchById(req.params.id, { read: true })
    res.json(notification)
  },

  async delete(req, res) {
    await Notification.query().deleteById(req.params.id)
    res.status(204).end()
  }
}
