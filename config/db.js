// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('edurunDB', 'root', 'dmgpgp12', {
    host: 'localhost',
    dialect: 'mysql', // 또는 'sqlite', 'postgres', 'mssql'
});

module.exports = sequelize;
