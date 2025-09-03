import { Customer } from "../../models/admin/Customer"

export class CustomerController {
  static async list(req, res) {
    const customers = await Customer.query()
    res.json(customers)
  }

  static async get(req, res) {
    const customer = await Customer.query().findById(req.params.id)
    res.json(customer)
  }
}
