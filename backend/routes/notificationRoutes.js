// backend/routes/notificationRoutes.js
import express from "express";
import {
  getNotifications,
  getNotificationById,
} from "../controllers/notificationController.js";

const router = express.Router();

// جلب جميع الإشعارات
router.get("/", getNotifications);

// جلب إشعار واحد بالـ ID
router.get("/:id", getNotificationById);

export default router;
