import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/User"

export default class AuthController {
  static async register(req, res) {
    try {
      const { name, email, password, role } = req.body
      const hashed = await bcrypt.hash(password, 10)

      const user = await User.query().insert({
        name,
        email,
        password: hashed,
        role: role || "customer",
      })

      res.json({ success: true, user })
    } catch (err) {
      res.status(400).json({ success: false, error: err.message })
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.query().findOne({ email })
      if (!user) return res.status(401).json({ error: "Invalid email or password" })

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) return res.status(401).json({ error: "Invalid email or password" })

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET || "secret",
        { expiresIn: "1d" }
      )

      res.json({ success: true, token, user })
    } catch (err) {
      res.status(400).json({ success: false, error: err.message })
    }
  }

  static async me(req, res) {
    try {
      const user = await User.query().findById(req.user.id)
      res.json(user)
    } catch (err) {
      res.status(400).json({ success: false, error: err.message })
    }
  }
}
