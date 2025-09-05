import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = (roles: string[] = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) return res.status(401).json({ error: 'Unauthorized' })
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!)
      if (roles.length && !roles.includes(decoded.role)) return res.status(403).json({ error: 'Forbidden' })
      req.user = decoded
      next()
    } catch {
      res.status(401).json({ error: 'Invalid token' })
    }
  }
}
