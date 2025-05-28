// services/userRankingService.js
const userRankingRepository = require('../repositories/userRankingRepository');

exports.userTenRanking = async () => {
    let userRankingWholeInfo = await userRankingRepository.userRankingWholeInfo();

    // 1. exp 기준 내림차순 정렬
    userRankingWholeInfo.sort((a, b) => b.exp - a.exp);
    
    // 2. 상위 10명 추출 및 순위 부여
    const userRankingTen = userRankingWholeInfo.slice(0, 10).map((item, index) => {
        return {
            userId: item.id,          // 또는 item.userId
            userName: item.username,  // 또는 item.userName
            userRank: index + 1,
            exp: item.exp             // 선택사항: exp도 함께 응답
        };
    });

    return userRankingTen;
};
