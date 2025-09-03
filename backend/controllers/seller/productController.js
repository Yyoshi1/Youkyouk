// backend/controllers/seller/ProductController.js
import { Product } from "../../models/seller/Product"
import { Module } from "../../models/seller/Module"

export default {
  async index(req, res) {
    const { sellerId } = req.params
    const modules = await Module.query().where({ seller_id: sellerId, active: true })
    const products = await Product.query().where({ seller_id: sellerId })

    // 
    res.json({ modules, products })
  },

  async create(req, res) {
    const product = await Product.query().insert(req.body)
    res.status(201).json(product)
  },

  async update(req, res) {
    const product = await Product.query().patchAndFetchById(req.params.id, req.body)
    res.json(product)
  },

  async delete(req, res) {
    await Product.query().deleteById(req.params.id)
    res.status(204).end()
  }
}
