import Notification from "../../models/seller/notification.model.js";

export default {
  async index(req, res) {
    const notifications = await Notification.findAll({ where: { seller_id: req.params.sellerId } });
    res.json(notifications);
  },

  async markAsRead(req, res) {
    const notification = await Notification.findByPk(req.params.id);
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    await notification.update({ is_read: true });
    res.json(notification);
  },

  async delete(req, res) {
    const notification = await Notification.findByPk(req.params.id);
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    await notification.destroy();
    res.status(204).end();
  }
};
