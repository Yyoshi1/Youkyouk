// Basic plugin structure for Payments management

module.exports = {
  name: 'payments',
  register(app) {
    app.get('/payments/methods', (req, res) => {
      res.json({ methods: ['credit_card', 'paypal', 'bank_transfer'] });
    });
  },
};
