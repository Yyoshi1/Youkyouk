const roles = {
  SUPER_ADMIN: 'super_admin',
  MARKET_ADMIN: 'market_admin',
  MODEL_ADMIN: 'model_admin',
  VENDOR: 'vendor',
  CUSTOMER: 'customer'
};

const permissions = {
  SUPER_ADMIN: ['manage_all'],
  MARKET_ADMIN: ['manage_market', 'manage_models'],
  MODEL_ADMIN: ['manage_model', 'manage_vendors'],
  VENDOR: ['manage_products', 'manage_orders'],
  CUSTOMER: ['place_orders', 'view_products']
};

module.exports = { roles, permissions };
