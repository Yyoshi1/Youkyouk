// Basic plugin structure for Shipping management

module.exports = {
  name: 'shipping',
  register(app) {
    app.get('/shipping/options', (req, res) => {
      res.json({ options: ['standard', 'express', 'overnight'] });
    });
  },
};
