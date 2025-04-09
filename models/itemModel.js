const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // DB 연결 인스턴스

const Item = sequelize.define(
    'Item',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'User', // 실제 DB 테이블 이름 지정
        timestamps: false, // createdAt, updatedAt 안 쓰면 false
    }
);

module.exports = Item;
