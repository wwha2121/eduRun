const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

router.post('/api/signUp', signupController.createUser);
// router.get('/signUp', signupController.getAllUsers);

module.exports = router;
