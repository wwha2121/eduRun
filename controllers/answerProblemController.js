// controllers/answerProblemController.js
const db = require('../config/db');

exports.answerProblem = async (req, res) => {
    const { userId,winCount } = req.body;

    if (!userId) {
        return res.status(400).json({ error: 'userId는 필수입니다.' });
    }

    try {
        // 맞았다고 왔으니까, 점수만 올려주면 된다
        console.log('userId:', userId);

        const expGain = winCount * 10;
        const moneyGain = winCount * 1000;
    
        // await db.query('UPDATE User SET exp = exp + 1 WHERE id = ?', [1]);
        [result] = await db.query(`UPDATE User SET exp = exp + '${expGain}'  WHERE id = '${userId}'`);
        [result] = await db.query(`UPDATE User SET money = money + '${moneyGain}' WHERE id = '${userId}'`);

        // console.log('Update 결과:', result);
        return res.status(200).json({ result: '점수가 올라가고 돈을 얻었습니다!' });

        
  
    } catch (error) {
        console.error('점수 업데이트 오류:', error);
        return res.status(500).json({ error: '서버 오류' });
    }
};
