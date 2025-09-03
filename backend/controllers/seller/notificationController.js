import { Notification } from "../../models/seller/Notification"

export class NotificationController {
  static async list(req, res) {
    const notifications = await Notification.query().where("seller_id", req.user.id)
    res.json(notifications)
  }

  static async markRead(req, res) {
    const notification = await Notification.query().patchAndFetchById(req.params.id, { read: true })
    res.json(notification)
  }
}
