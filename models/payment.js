const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Order = require("./Order");

const Payment = sequelize.define("Payment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  orderId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Order, key: "id" } },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  method: { type: DataTypes.STRING }, // e.g., card, transfer, paypal
  status: { type: DataTypes.STRING, defaultValue: "pending" }, // pending, completed, failed
}, { timestamps: true });

Payment.belongsTo(Order, { foreignKey: "orderId", as: "order" });

module.exports = Payment;
