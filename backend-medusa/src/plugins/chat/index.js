// Basic plugin structure for Chat system

module.exports = {
  name: 'chat',
  register(app) {
    app.get('/chat/status', (req, res) => {
      res.json({ status: 'Chat plugin active' });
    });
  },
};
