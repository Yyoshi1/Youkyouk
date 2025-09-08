import Notification from '../models/Notification.js';

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
