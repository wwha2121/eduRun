const express = require('express');
const router = express.Router();
const userItemController = require('../controllers/userItemController');

// ✅ 쿼리 파라미터 방식 사용 (예: /api/user/items?userId=41)
router.get('/api/user/items', userItemController.getUserItems);

module.exports = router;


// const express = require('express');
// const router = express.Router();

// router.get('/api/user/:userId/items', (req, res) => {
//     console.log('✅ 라우터 작동: ', req.params.userId);
//     res.json({ message: `User ${req.params.userId}의 아이템 요청됨` });
// });

// module.exports = router;