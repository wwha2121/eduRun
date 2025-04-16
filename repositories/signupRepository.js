// repositories/signupRepository.js
const User = require('../models/userModel');

const signupRepository = {
    createUser: async (userData) => {
        return await User.create({ username, password });
    },

    // getAllUsers: async () => {
    //     return await User.findAll();
    // },

    // getUserByUsername: async (username) => {
    //     return await User.findOne({ where: { username } });
    // },
};

module.exports = signupRepository;
