const db = require('../config/db');

exports.requestProblem = async (req, res) => {
    try {
        const [countRows] = await db.query('SELECT COUNT(*) AS count FROM Problem');
        const total = countRows[0].count;

        if (total == 0) {
            return res.status(404).json({ error: '등록된 문제가 없습니다.' });
        }

        const randomOffset = Math.floor(Math.random() * total);
        const [rows] = await db.query('SELECT question, answer FROM Problem LIMIT 1 OFFSET 0', [randomOffset]);

        const problem = rows[0];

        return res.status(201).json(problem);
    } catch (error) {
        console.error(' 문제 출제 중 오류:', error);
        return res.status(500).json({ error: '서버오류' });
    }
};
