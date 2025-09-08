import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.ENUM('todo', 'in-progress', 'done'), defaultValue: 'todo' },
  dueDate: { type: DataTypes.DATE }
}, { timestamps: true });

export default Task;
