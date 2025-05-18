const express = require('express');
const router = express.Router();
const getUserInfoController = require('../controllers/getUserInfoController');

router.get('/api/user/getUserInfo', getUserInfoController.getUserInfo);

module.exports = router;
