import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Seller from "./seller.model.js";

const Promotion = sequelize.define("Promotion", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  seller_id: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  discount_percentage: { type: DataTypes.FLOAT, allowNull: false },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: false },
}, {
  timestamps: true,
  tableName: "promotions",
});

Seller.hasMany(Promotion, { foreignKey: "seller_id" });
Promotion.belongsTo(Seller, { foreignKey: "seller_id" });

export default Promotion;
