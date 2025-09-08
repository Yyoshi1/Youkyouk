import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Team from './Team.js';

const Project = sequelize.define('Project', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  teamId: { type: DataTypes.INTEGER, references: { model: Team, key: 'id' } }
}, {
  tableName: 'projects',
  timestamps: true
});

export default Project;
