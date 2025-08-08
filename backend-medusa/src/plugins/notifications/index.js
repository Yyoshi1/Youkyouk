// Basic plugin structure for Notifications

module.exports = {
  name: 'notifications',
  register(app) {
    app.get('/notifications/test', (req, res) => {
      res.json({ message: 'Notifications plugin active' });
    });
  },
};
