// Basic plugin structure for Inventory management

module.exports = {
  name: 'inventory',
  register(app) {
    // Register routes or hooks here
    app.get('/inventory/status', (req, res) => {
      res.json({ status: 'Inventory plugin active' });
    });
  },
};
