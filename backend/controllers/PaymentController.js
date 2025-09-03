import { Payment } from "../models/Payment"

export default class PaymentController {
  static async pay(req, res) {
    try {
      const { order_id, payment_method_id, amount } = req.body
      const payment = await Payment.query().insert({
        order_id,
        payment_method_id,
        amount,
        status: "paid",
      })
      res.json(payment)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}
