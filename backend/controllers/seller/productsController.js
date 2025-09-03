import { Product } from "../../models/seller/Product.js"

export class ProductsController {
  static async list(req, res) {
    const sellerId = req.params.sellerId
    const products = await Product.query().where("seller_id", sellerId)
    res.json(products)
  }

  static async create(req, res) {
    const sellerId = req.params.sellerId
    const productData = { ...req.body, seller_id: sellerId }
    const product = await Product.query().insert(productData)
    res.json(product)
  }

  static async update(req, res) {
    const id = req.params.id
    const product = await Product.query().patchAndFetchById(id, req.body)
    res.json(product)
  }

  static async delete(req, res) {
    const id = req.params.id
    await Product.query().deleteById(id)
    res.json({ success: true })
  }
}
