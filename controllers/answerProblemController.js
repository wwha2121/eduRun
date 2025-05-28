// controllers/answerProblemController.js
const db = require('../config/db');

exports.answerProblem = async (req, res) => {
    const { userId, winCount } = req.body;

    if (!userId) {
        return res.status(400).json({ error: 'userId은 필수입니다.' });
    }

    try {
        const expGain = winCount * 100;
        const moneyGain = winCount * 1000;

        // ✅ 올바른 컬럼명 사용
        const [rows] = await db.query(`SELECT * FROM User WHERE id = '${userId}'`);

        if (rows.length === 0) {
            return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
        }

        const user = rows[0];
        const previousExp = user.exp;
        const previousMoney = user.money;

        // ✅ 업데이트 쿼리
        await db.query(`UPDATE User SET exp = exp + ${expGain}, money = money + ${moneyGain} WHERE id = ${userId}`);

        const newExp = previousExp + expGain;
        const newMoney = previousMoney + moneyGain;

        return res.status(200).json({
            message: '점수와 돈이 성공적으로 증가했습니다!',
            userId,
            before: {
                exp: previousExp,
                money: previousMoney
            },
            gained: {
                exp: expGain,
                money: moneyGain
            },
            after: {
                exp: newExp,
                money: newMoney
            }
        });

    } catch (error) {
        console.error('점수 업데이트 오류:', error);
        return res.status(500).json({ error: '서버 오류' });
    }
};
