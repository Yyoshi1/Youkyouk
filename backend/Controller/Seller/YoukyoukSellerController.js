import { YoukyoukSeller } from "../../models/seller/YoukyoukSeller.js"
import { YoukyoukProduct } from "../../models/seller/YoukyoukProduct.js"
import { YoukyoukOrder } from "../../models/seller/YoukyoukOrder.js"

export const getSellerProfile = async (req, res) => {
  try {
    const seller = await YoukyoukSeller.query().findById(req.params.id).withGraphFetched('[products, orders]')
    res.json(seller)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updateSellerProfile = async (req, res) => {
  try {
    const updated = await YoukyoukSeller.query().patchAndFetchById(req.params.id, req.body)
    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// CRUD Products
export const getProducts = async (req, res) => {
  try {
    const products = await YoukyoukProduct.query().where('seller_id', req.params.id)
    res.json(products)
  } catch (err) { res.status(500).json({ error: err.message }) }
}

export const createProduct = async (req, res) => {
  try {
    const product = await YoukyoukProduct.query().insert({ ...req.body, seller_id: req.params.id })
    res.json(product)
  } catch (err) { res.status(500).json({ error: err.message }) }
}

export const updateProduct = async (req, res) => {
  try {
    const updated = await YoukyoukProduct.query().patchAndFetchById(req.params.productId, req.body)
    res.json(updated)
  } catch (err) { res.status(500).json({ error: err.message }) }
}

export const deleteProduct = async (req, res) => {
  try {
    await YoukyoukProduct.query().deleteById(req.params.productId)
    res.json({ success: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
}

// Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await YoukyoukOrder.query().where('seller_id', req.params.id).withGraphFetched('[items, customer]')
    res.json(orders)
  } catch (err) { res.status(500).json({ error: err.message }) }
}
