import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import Project from './Project.js';

const Task = sequelize.define('Task', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  projectId: { type: DataTypes.INTEGER, references: { model: Project, key: 'id' } },
  status: { type: DataTypes.STRING, defaultValue: 'Pending' }
}, {
  tableName: 'tasks',
  timestamps: true
});

export default Task;
