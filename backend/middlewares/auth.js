import jwt from "jsonwebtoken"
import { User } from "../models/User"

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: "No token provided" })

  const token = authHeader.split(" ")[1]
  if (!token) return res.status(401).json({ error: "No token provided" })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret")
    const user = await User.query().findById(decoded.id)
    if (!user) return res.status(401).json({ error: "Invalid token" })
    req.user = user
    next()
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" })
  }
}
