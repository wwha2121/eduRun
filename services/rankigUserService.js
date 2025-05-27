const userRankingRepository = require('../repositories/rankingUserService');

exports.userRanking = async (req, res) => {
    const userRanking = await userRankingRepository.userRanking();

    res.status(200).send(userRanking);
};
