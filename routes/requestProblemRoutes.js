const express = require('express');
const router = express.Router();
const requestProblemController = require('../controllers/requestProblemController');

router.post('/api/problem/request', requestProblemController.requestProblem);
// router.get('/signUp', signupController.getAllUsers);

module.exports = router;
