import { Product } from "../models/Product"

export default class ProductController {
  static async index(req, res) {
    const products = await Product.query().withGraphFetched("vendor")
    res.json(products)
  }

  static async show(req, res) {
    const product = await Product.query()
      .findById(req.params.id)
      .withGraphFetched("vendor")
    if (!product) return res.status(404).json({ error: "Product not found" })
    res.json(product)
  }

  static async create(req, res) {
    try {
      const { name, description, price, stock } = req.body
      const product = await Product.query().insert({
        name,
        description,
        price,
        stock,
        vendor_id: req.user.id,
      })
      res.json(product)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  static async update(req, res) {
    try {
      const updated = await Product.query().patchAndFetchById(req.params.id, req.body)
      res.json(updated)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  static async delete(req, res) {
    try {
      await Product.query().deleteById(req.params.id)
      res.json({ success: true })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}
