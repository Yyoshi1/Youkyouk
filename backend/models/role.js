const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

module.exports = Role;
