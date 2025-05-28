const db = require('../config/db');

exports.getUserItems = async (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: 'userId가 필요합니다.' });
    }

    try {
        // ⚠️ userId를 직접 SQL에 삽입 (보안 위험 있음)
        const [items] = await db.query(`
            SELECT 
                i.id AS itemId,
                i.name AS itemName,
                i.description,
                i.price,
                ui.count AS quantity
            FROM 
                UserItem ui
            JOIN 
                Item i ON ui.item_id = i.id
            WHERE 
                ui.user_id = '${userId}'
        `);

        return res.status(200).json(items);
    } catch (error) {
        console.error('❌ 유저 아이템 조회 실패:', error);
        return res.status(500).json({ error: '서버 오류', details: error.message });
    }
};
