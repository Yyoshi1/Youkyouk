import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Seller = sequelize.define("Seller", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  // 🔹 
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "inactive", "suspended"),
    defaultValue: "inactive",
  },
  role: {
    type: DataTypes.ENUM("individual", "company"),
    defaultValue: "
