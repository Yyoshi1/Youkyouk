const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");
const Product = require("./Product");

const Order = sequelize.define("Order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  buyerId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: "id" } },
  total: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: "pending" }, // pending, paid, shipped, completed
}, { timestamps: true });

Order.belongsTo(User, { foreignKey: "buyerId", as: "buyer" });
Order.belongsToMany(Product, { through: "OrderItems" });

module.exports = Order;
