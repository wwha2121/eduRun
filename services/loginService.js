// services/loginService.js
const loginRepository = require('../repositories/loginRepository');

exports.validateLogin = async ({ username, password }) => {
    console.log(username, password);
    console.log('asdasdasd');

    return await loginRepository.validateLogin({ username, password });
};
