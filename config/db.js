// config/db.js
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('eduRunDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // 또는 'sqlite', 'postgres', 'mssql'
});
module.exports = sequelize;

