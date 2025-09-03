import { Product } from "../../models/admin/Product"

export class ProductController {
  static async list(req, res) {
    const products = await Product.query()
    res.json(products)
  }

  static async get(req, res) {
    const product = await Product.query().findById(req.params.id)
    res.json(product)
  }

  static async create(req, res) {
    const product = await Product.query().insert(req.body)
    res.json(product)
  }

  static async update(req, res) {
    const product = await Product.query().patchAndFetchById(req.params.id, req.body)
    res.json(product)
  }

  static async delete(req, res) {
    await Product.query().deleteById(req.params.id)
    res.json({ success: true })
  }
}
