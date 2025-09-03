import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Seller from "./seller.model.js";

const Notification = sequelize.define("Notification", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  seller_id: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
  is_read: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  timestamps: true,
  tableName: "notifications",
});

Seller.hasMany(Notification, { foreignKey: "seller_id" });
Notification.belongsTo(Seller, { foreignKey: "seller_id" });

export default Notification;
