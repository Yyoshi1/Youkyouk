import { Product } from "../../models/seller/Product"

export class ProductController {
  static async list(req, res) {
    const products = await Product.query().where("seller_id", req.user.id)
    res.json(products)
  }

  static async get(req, res) {
    const product = await Product.query().findById(req.params.id)
    res.json(product)
  }

  static async create(req, res) {
    const product =
