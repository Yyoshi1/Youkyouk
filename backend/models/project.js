import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  isPrivate: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true
});

// Associations
Project.belongsTo(User, { as: 'owner', foreignKey: 'ownerId' });
Project.hasMany(User, { as: 'members', foreignKey: 'projectId' });

export default Project;
