// إنشاء إشعار جديد
export const createNotification = (req, res) => {
  res.json({ message: "Notification created successfully" });
};

// جلب جميع الإشعارات
export const getNotifications = (req, res) => {
  res.json([{ id: 1, message: "Welcome notification" }]);
};

// جلب إشعار واحد بالـ ID
export const getNotificationById = (req, res) => {
  const { id } = req.params;
  res.json({ id, message: `Notification with ID ${id}` });
};

// تحديث إشعار
export const updateNotification = (req, res) => {
  const { id } = req.params;
  res.json({ id, message: `Notification ${id} updated` });
};

// حذف إشعار
export const deleteNotification = (req, res) => {
  const { id } = req.params;
  res.json({ id, message: `Notification ${id} deleted` });
};
