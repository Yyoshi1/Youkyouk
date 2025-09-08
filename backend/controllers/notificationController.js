// backend/controllers/notificationController.js

// جلب جميع الإشعارات
export const getNotifications = (req, res) => {
  res.json([{ id: 1, message: "Welcome to Youkyouk Notifications" }]);
};

// جلب إشعار واحد بالـ ID
export const getNotificationById = (req, res) => {
  const { id } = req.params;
  res.json({ id, message: `Notification ${id}` });
};

// إنشاء إشعار جديد
export const createNotification = (req, res) => {
  const { message } = req.body;
  res.status(201).json({ id: Date.now(), message });
};

// تحديث إشعار
export const updateNotification = (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  res.json({ id, message });
};

// حذف إشعار
export const deleteNotification = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Notification ${id} deleted` });
};
