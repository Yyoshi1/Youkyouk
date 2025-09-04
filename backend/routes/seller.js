import express from "express"
import {
  getSellerProfile, updateSellerProfile,
  getProducts, createProduct, updateProduct, deleteProduct,
  getOrders
} from "../controllers/seller/YoukyoukSellerController.js"

const router = express.Router()

// Seller Profile
router.get("/profile/:id", getSellerProfile)
router.patch("/profile/:id", updateSellerProfile)

// Products
router.get("/:id/products", getProducts)
router.post("/:id/products", createProduct)
router.patch("/:id/products/:productId", updateProduct)
router.delete("/:id/products/:productId", deleteProduct)

// Orders
router.get("/:id/orders", getOrders)

export default router
