const User = require('../models/userModel');

const userRankingRepository = {
    userRankingWholeInfo: asyc ({}) => {
        const user = await User.findAll;
        
        return user; 

    }
}


module.exports = userRankingRepository;