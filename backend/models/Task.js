import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Project from './Project.js';
import User from './User.js';

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.ENUM('Todo', 'InProgress', 'Done'),
    defaultValue: 'Todo'
  },
  dueDate: {
    type: DataTypes.DATE
  }
}, {
  timestamps: true
});

// Associations
Task.belongsTo(Project, { foreignKey: 'projectId' });
Task.belongsTo(User, { as: 'assignee', foreignKey: 'assigneeId' });

export default Task;
