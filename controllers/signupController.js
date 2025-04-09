const signUpService = require('../services/signupService');

exports.createUser= async (req,res) => {
    try {
        const newUser = await signupService.createUser(req.body);
        res.status(201).json(newUser);
      } catch (err) {
        res.status(500).json({ message: '회원가입 실패' });
      }
    };
