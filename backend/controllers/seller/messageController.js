import Message from "../../models/seller/message.model.js";

export default {
  async index(req, res) {
    const messages = await Message.findAll({ where: { seller_id: req.params.sellerId } });
    res.json(messages);
  },

  async show(req, res) {
    const message = await Message.findByPk(req.params.id);
    if (!message) return res.status(404).json({ error: "Message not found" });
    res.json(message);
  },

  async send(req, res) {
    const message = await Message.create({ ...req.body, seller_id: req.params.sellerId });
    res.status(201).json(message);
  },

  async markAsRead(req, res) {
    const message = await Message.findByPk(req.params.id);
    if (!message) return res.status(404).json({ error: "Message not found" });
    await message.update({ is_read: true });
    res.json(message);
  }
};
