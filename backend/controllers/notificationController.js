// backend/controllers/notificationController.js

// إرجاع جميع الإشعارات
export const getNotifications = (req, res) => {
  const notifications = [
    { id: 1, title: "Bienvenue!", message: "Votre compte est activé." },
    { id: 2, title: "Promo", message: "Réduction spéciale aujourd’hui." },
    { id: 3, title: "Info", message: "Nouvelle fonctionnalité disponible." },
  ];

  res.json(notifications);
};

// إرجاع إشعار واحد بالـ ID
export const getNotificationById = (req, res) => {
  const { id } = req.params;

  const notifications = [
    { id: 1, title: "Bienvenue!", message: "Votre compte est activé." },
    { id: 2, title: "Promo", message: "Réduction spéciale aujourd’hui." },
    { id: 3, title: "Info", message: "Nouvelle fonctionnalité disponible." },
  ];

  const notif = notifications.find((n) => n.id === parseInt(id));

  if (!notif) {
    return res.status(404).json({ error: "Notification introuvable" });
  }

  res.json(notif);
};
