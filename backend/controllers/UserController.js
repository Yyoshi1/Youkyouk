import { User } from "../models/User"

export default class UserController {
  static async index(req, res) {
    const users = await User.query()
    res.json(users)
  }

  static async show(req, res) {
    const user = await User.query().findById(req.params.id)
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json(user)
  }
}
