import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Seller from "./seller.model.js";

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  seller_id: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  status: { type: DataTypes.ENUM("draft", "active", "archived"), defaultValue: "draft" },
}, {
  timestamps: true,
  tableName: "products",
});

// 🔹 العلاقة مع Seller
Seller.hasMany(Product, { foreignKey: "seller_id
