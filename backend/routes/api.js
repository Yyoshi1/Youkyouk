import express from "express"
import AuthController from "../controllers/AuthController"
import ProductController from "../controllers/ProductController"
import OrderController from "../controllers/OrderController"
import PaymentController from "../controllers/PaymentController"
import ShippingController from "../controllers/ShippingController"
import CouponController from "../controllers/CouponController"
import SettingController from "../controllers/SettingController"
import UserController from "../controllers/UserController"
import { authMiddleware } from "../middlewares/auth"

const router = express.Router()

// Auth
router.post("/auth/register", AuthController.register)
router.post("/auth/login", AuthController.login)
router.get("/auth/me", authMiddleware, AuthController.me)

// Products
router.get("/products", ProductController.index)
router.get("/products/:id", ProductController.show)
router.post("/products", authMiddleware, ProductController.create)
router.put("/products/:id", authMiddleware, ProductController.update)
router.delete("/products/:id", authMiddleware, ProductController.delete)

// Orders
router.get("/orders", authMiddleware, OrderController.index)
router.get("/orders/:id", authMiddleware, OrderController.show)
router.post("/orders", authMiddleware, OrderController.create)

// Payments
router.post("/payments", authMiddleware, PaymentController.pay)

// Shipping
router.get("/shipping-methods", ShippingController.index)

// Coupons
router.post("/coupons/apply", authMiddleware, CouponController.apply)

// Settings
router.get("/settings", SettingController.index)
router.put("/settings", SettingController.update)

// Users/Admin
router.get("/users", authMiddleware, UserController.index)
router.get("/users/:id", authMiddleware, UserController.show)

export default router
