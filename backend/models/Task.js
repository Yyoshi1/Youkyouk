import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  status: { type: DataTypes.ENUM('todo', 'in-progress', 'done'), defaultValue: 'todo' },
  dueDate: { type: DataTypes.DATE, allowNull: true }
}, { timestamps: true });

export default Task;
