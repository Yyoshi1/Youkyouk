import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Seller from "./seller.model.js";

const Message = sequelize.define("Message", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  seller_id: { type: DataTypes.INTEGER, allowNull: false },
  sender: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  is_read: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  timestamps: true,
  tableName: "messages",
});

Seller.hasMany(Message, { foreignKey: "seller_id" });
Message.belongsTo(Seller, { foreignKey: "seller_id" });

export default Message;
