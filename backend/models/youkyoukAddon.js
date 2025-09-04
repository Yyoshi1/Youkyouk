// backend/models/YoukyoukAddon.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");

const YoukyoukAddon = sequelize.define("YoukyoukAddon", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.ENUM("active", "inactive"),
    defaultValue: "active",
  },
}, {
  tableName: "youkyouk_addons",
});

module.exports = YoukyoukAddon;
