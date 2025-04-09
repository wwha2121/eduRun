const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // DB 연결 인스턴스

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  exp: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  money: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'User', // 실제 DB 테이블 이름 지정
  timestamps: false, // createdAt, updatedAt 안 쓰면 false
});

module.exports = User;
