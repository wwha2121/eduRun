const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/login', loginController.validateLogin);
// router.get('/signUp', signupController.getAllUsers);

module.exports = router;
