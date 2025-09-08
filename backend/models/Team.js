import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Team = sequelize.define('Team', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'teams',
  timestamps: true
});

export default Team;
