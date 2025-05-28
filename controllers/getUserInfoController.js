const db = require('../config/db');

exports.getUserInfo = async (req, res) => {
    try {
        const username = req.query.username;

        if (!username) {
            return res.status(400).json({ error: 'username은 필수입니다.' });
        }

        // 🔍 유저 정보 조회 (비추 방식이지만 요청하신대로 템플릿 리터럴 사용)
        const [rows] = await db.query(`SELECT * FROM User WHERE username = '${username}'`);

        if (rows.length === 0) {
            return res.status(404).json({ error: '해당 유저를 찾을 수 없습니다.' });
        }

        const user = rows[0];

        // 💡 랭킹용 형식으로 변환
        const formattedUserInfo = {
            userId: user.id,
            userName: user.username,
            userRank: 1, // 1명만 반환하므로 임의로 1등 처리
            totalexp: user.exp,
            level: Math.floor(user.exp / 100),
            exp: user.exp % 100,
            money: user.money
        };

        return res.status(200).json(formattedUserInfo);

    } catch (error) {
        return res.status(500).json({ error: '서버 오류', details: error.message });
    }
};
