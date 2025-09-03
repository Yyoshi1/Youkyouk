import { Coupon } from "../models/Coupon"

export default class CouponController {
  static async apply(req, res) {
    const { code, total } = req.body
    const coupon = await Coupon.query().findOne({ code, active: true })
    if (!coupon) return res.status(404).json({ error: "Coupon not found" })

    let discount = 0
    if (coupon.type === "percentage") {
      discount = (total * coupon.discount) / 100
    } else {
      discount = coupon.discount
    }

    res.json({ discount, newTotal: total - discount })
  }
}
