// Basic plugin structure for Subscription plans

module.exports = {
  name: 'subscriptions',
  register(app) {
    app.get('/subscriptions/plans', (req, res) => {
      res.json({ plans: ['basic', 'pro', 'enterprise'] });
    });
  },
};
