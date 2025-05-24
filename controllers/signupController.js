const signUpService = require('../services/signupService');

exports.createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username);

        const signUpService = require('../services/signupService');
        const newUser = await signUpService.createUser({ username, password });
        // console.log('User signup:', newUser.toJSON());
        console.log('User signup:');

        res.status(201).json({ message: '회원가입 성공'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '회원가입 실패', error: err.message });
    }
};

// exports.createUser = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // 🔥 DB에 저장
//         const newUser = await User.create({ username, password });
//         console.log('User signup:', req.body);
//         res.status(200).send('User created!');
//     } catch (err) {
//         res.status(500).json({ message: '회원가입 실패' });
//     }
// };

// exports.getAllUsers = async (req, res) => {
//     try {
//         res.status(200).json({ message: '모든 사용자 조회' });
//     } catch (err) {
//         res.status(500).json({ message: '조회 실패' });
//     }
// };
