// const userInfo = require('../models/userModel');
const signupRepository = require('../repositories/signupRepository');

exports.createUser = async ({ username, password }) => {
    await signupRepository.createUser({ username, password });
};
