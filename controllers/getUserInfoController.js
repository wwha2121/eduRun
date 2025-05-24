const db = require('../config/db');
const User = require('../models/userModel');

const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

exports.getUserInfo = async (req, res) => {
    try {
        console.log(req.query);
        console.log(req.query.username);

        const [rows] = await db.query(`SELECT * FROM User WHERE username = '${req.query.username}'`);
        // const [rows] = await db.query('SELECT * FROM User WHERE id = ?', [req.query.username]);

        console.log([rows]);
        return res.status(200).json([rows]);
    } catch (error) {
        return res.status(500).json({ error: '서버 오류', details: error.message });
    }
};
