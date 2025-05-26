const userRankingRepository = require('../repositories/rankingUserService');

exports.userRanking = async () => {
  
  const userRanking = userRankingRepository.userRanking();

  return await userRanking;
};
