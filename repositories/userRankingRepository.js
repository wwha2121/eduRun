const User = require('../models/userModel');

const userRankingRepository = {
    userRankingWholeInfo: async function () {
        const users = await User.findAll();
        return users;
    },
};

module.exports = userRankingRepository;
