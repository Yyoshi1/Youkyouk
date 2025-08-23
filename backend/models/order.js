const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
  total: { type: DataTypes.FLOAT, allowNull: false }
});

module.exports = Order;
