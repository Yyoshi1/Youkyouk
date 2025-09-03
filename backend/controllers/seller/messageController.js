// backend/controllers/seller/MessageController.js
import { Message } from "../../models/seller/Message"

export default {
  async index(req, res) {
    const messages = await Message.query()
      .where({ seller_id: req.params.sellerId })
      .withGraphFetched("customer")
    res.json(messages)
  },

  async show(req, res) {
    const message = await Message.query().findById(req.params.id).withGraphFetched("customer")
    if (!message) return res.status(404).json({ error: "Message not found" })
    res.json(message)
  },

  async send(req, res) {
    const message = await Message.query().insert(req.body)
    res.status(201).json(message)
  },

  async delete(req, res) {
    await Message.query().deleteById(req.params.id)
    res.status(204).end()
  }
}
