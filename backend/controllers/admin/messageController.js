import { Message } from "../../models/admin/Message"

export class MessageController {
  static async list(req, res) {
    const messages = await Message.query()
    res.json(messages)
  }

  static async send(req, res) {
    const msg = await Message.query().insert(req.body)
    res.json(msg)
  }
}
