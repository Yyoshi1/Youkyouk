import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import User from "./User.js";

const Task = sequelize.define(
  "Task",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("pending", "in-progress", "done"),
      defaultValue: "pending"
    }
  },
  {
    timestamps: true
  }
);

// علاقة كل مهمة مع مستخدم
Task.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Task, { foreignKey: "userId" });

export default Task;
