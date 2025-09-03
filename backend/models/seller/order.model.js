import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Seller from "./seller.model.js";

const Order = sequelize.define("Order", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  seller_id: { type: DataTypes.INTEGER, allowNull: false },
  customer_name: { type: DataTypes.STRING, allowNull: false },
  total_amount: { type: DataTypes.FLOAT, allowNull: false },
  status: { 
    type: DataTypes.ENUM("pending", "paid", "shipped", "completed", "cancelled"), 
    defaultValue: "pending" 
  },
}, {
  timestamps: true,
  tableName: "orders",
});

Seller.hasMany(Order, { foreignKey: "seller_id" });
Order.belongsTo(Seller, { foreignKey: "seller_id" });

export default Order;
