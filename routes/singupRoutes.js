const express = require('express');
const router = express.Router();
const signupController= require('../controllers/signupController');

router.post('/signUp', signupController.createUser);
router.get('/signUp', signupController.getAllUsers);

module.exports = router;