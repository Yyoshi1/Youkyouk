import express from "express";
import sellerController from "../../controllers/seller/seller.controller.js";
import productController from "../../controllers/seller/product.controller.js";
import orderController from "../../controllers/seller/order.controller.js";
import messageController from "../../controllers/seller/message.controller.js";
import promotionController from "../../controllers/seller/promotion.controller.js";
import notificationController from "../../controllers/seller/notification.controller.js";
import settingsController from "../../controllers/seller/settings.controller.js";

const router = express.Router();

// ---------------------------
// 🔹 Seller Auth & Profile
// ---------------------------
router.post("/register", sellerController.register);
router.post("/login", sellerController.login);
router.get("/:id/profile", sellerController.getProfile);
router.put("/:id/profile", sellerController.updateProfile);

// ---------------------------
// 🔹 Products
// ---------------------------
router.get("/:sellerId/products", productController.index);
router.get("/:sellerId/products/:id", productController.show);
router.post("/:sellerId/products", productController.create);
router.put("/:sellerId/products/:id", productController.update);
router.delete("/:sellerId/products/:id", productController.delete);

// ---------------------------
// 🔹 Orders
// ---------------------------
router.get("/:sellerId/orders", orderController.index);
router.get("/:sellerId/orders/:id", orderController.show);
router.put("/:sellerId/orders/:id/status", orderController.updateStatus);

// ---------------------------
// 🔹 Messages
// ---------------------------
router.get("/:sellerId/messages", messageController.index);
router.get("/:sellerId/messages/:id", messageController.show);
router.post("/:sellerId/messages", messageController.send);
router.put("/:sellerId/messages/:id/read", messageController.markAsRead);

// ---------------------------
// 🔹 Promotions
// ---------------------------
router.get("/:sellerId/promotions", promotionController.index);
router.post("/:sellerId/promotions", promotionController.create);
router.put("/:sellerId/promotions/:id", promotionController.update);
router.delete("/:sellerId/promotions/:id", promotionController.delete);

// ---------------------------
// 🔹 Notifications
// ---------------------------
router.get("/:sellerId/notifications", notificationController.index);
router.put("/:sellerId/notifications/:id/read", notificationController.markAsRead);
router.delete("/:sellerId/notifications/:id", notificationController.delete);

// ---------------------------
// 🔹 Settings
// ---------------------------
router.get("/:sellerId/settings", settingsController.get);
router.put("/:sellerId/settings", settingsController.update);

export default router;
