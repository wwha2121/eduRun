const loginService = require('../services/loginService');
console.log('디버깅 시작');

exports.validateLogin = async (req, res) => {
    console.log('디버깅 중');
    const { username, password } = req.body;

    try {
        const UserInfo = await loginService.validateLogin({ username, password });

        if (UserInfo) {
            console.log('User login Success', req.body);
            res.status(200).send(username);
        } else {
            console.log('User login fallure');
        }
    } catch (err) {
        res.status(500).json({ message: '로그인 오류' });
    }
};
