const express = require('express');
const router = express.Router();
const userRankingController = require('../controllers/userRankingController');

router.get('/api/user/ranking', userRankingController.getUserRanking);

module.exports = router;
