const userInfo = require('../models/userModel');

exports.createUser = async () => {
    return await userInfo.create(data);
}