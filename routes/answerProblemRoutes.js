const express = require('express');
const router = express.Router();
const answerProblemController = require('../controllers/answerProblemController');

router.post('/api/problem/answer', answerProblemController.answerProblem);
// router.get('/signUp', signupController.getAllUsers);

module.exports = router;
