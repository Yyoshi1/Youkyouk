import { Message } from "../../models/seller/Message"

export class MessageController {
  static async list(req, res) {
    const messages = await Message.query().where("seller_id", req.user.id)
    res.json(messages)
  }

  static async send(req, res) {
    const msg = await Message.query().insert({ ...req.body, seller_id: req.user.id })
    res.json(msg)
  }
}
