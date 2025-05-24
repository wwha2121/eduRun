const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/api/itemBuy', itemController.buyItem);

module.exports = router;
