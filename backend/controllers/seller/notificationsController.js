import { Notification } from "../../models/seller/Notification.js"

export const getNotifications = async (req, res) => {
  const sellerId = req.params.sellerId
  const notifications = await Notification.query().where("seller_id", sellerId).orderBy("created_at", "desc")
  res.json(notifications)
}

export const markAsRead = async (req, res) => {
  const notificationId = req.params.id
  await Notification.query().findById(notificationId).patch({ read: true })
  res.json({ success: true })
}
