// services/userRankingService.js
const userRankingRepository = require('../repositories/userRankingRepository');

exports.userTenRanking = async () => {
    let userRankingWholeInfo = await userRankingRepository.userRankingWholeInfo();

    // 1. exp 기준 내림차순 정렬
    userRankingWholeInfo.sort((a, b) => b.exp - a.exp);
    
    // 2. 상위 10명 추출 및 순위 부여
    const userRankingTen = userRankingWholeInfo.slice(0, 10).map((user, index) => {
        return {
            userId: user.id,          // 또는 item.userId
            userName: user.username,  // 또는 item.userName
            userRank: index + 1,
            totalexp: user.exp,    
            level: (user.exp-user.exp%100)/100,
            exp: user.exp- ((user.exp-user.exp%100)/100)*100// 선택사항: exp도 함께 응답
        };
    });

    return userRankingTen;
};
