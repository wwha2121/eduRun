const userRankingService = require('../services/userRankingService');

exports.getUserRanking = async (res) => {
    try {
        const userRanking = userRankingService.userRanking;
        return res.status(200).json(userRanking);
    } catch (error) {
        return res.status(500).json({ error: '서버 오류', details: error.message });
    }
};
