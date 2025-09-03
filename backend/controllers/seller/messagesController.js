import { Message } from "../../models/seller/Message.js"

export class MessagesController {
  static async list(req, res) {
    const sellerId = req.params.sellerId
    const messages = await Message.query().where("seller_id", sellerId)
    res.json(messages)
  }

  static async send(req, res) {
    const sellerId = req.params.sellerId
    const message = await Message.query().insert({ ...req.body, seller_id: sellerId })
    res.json(message)
  }
}
