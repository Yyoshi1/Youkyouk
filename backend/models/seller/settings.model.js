import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Seller from "./seller.model.js";

const Settings = sequelize.define("Settings", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  seller_id: { type: DataTypes.INTEGER, allowNull: false },
  currency: { type: DataTypes.STRING, defaultValue: "USD" },
  language: { type: DataTypes.STRING, defaultValue: "en" },
  theme: { type: DataTypes.ENUM("light", "dark"), defaultValue: "light" },
}, {
  timestamps: true,
  tableName: "settings",
});

Seller.hasOne(Settings, { foreignKey: "seller_id" });
Settings.belongsTo(Seller, { foreignKey: "seller_id" });

export default Settings;
