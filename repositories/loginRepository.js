const User = require('../models/userModel');

const loginRepository = {
    validateLogin: async ({ username, password }) => {
        const user = await User.findOne({ where: { username } });
        if (!user) return false;
        console.log(username, password);

        if (user.password === password) {
            return true;
        } else {
            return false;
        }
    },
};

module.exports = loginRepository;
