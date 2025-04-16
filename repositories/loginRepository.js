// repositories/loginRepository.js
const User = require('../models/userModel');

const loginRepository = {
    validateLogin: async ({ username, password }) => {
        const user = await User.findOne({ where: { username } });
        if (!user) return false;
        console.log(username, password);

        // 🔒 패스워드 일치 여부 확인 (단순 비교 — 추후 bcrypt 추천!)
        if (user.password === password) {
            return true;
        } else {
            return false;
        }
    },
};

module.exports = loginRepository;
