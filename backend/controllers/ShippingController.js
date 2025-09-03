import { ShippingMethod } from "../models/ShippingMethod"

export default class ShippingController {
  static async index(req, res) {
    const methods = await ShippingMethod.query().where("active", true)
    res.json(methods)
  }
}
