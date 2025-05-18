const db = require('../config/db');
const User = require('../models/userModel');

const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

exports.getUserInfo = async (req, res) => {
    try {
        const [rows] = await db.query(`SELECT * FROM USER WHERE id = ${req.query.userId}`);

        return res.status(200).json([rows]);
    } catch (error) {
        return res.status(500).json({ error: '서버 오류', details: error.message });
    }
};
