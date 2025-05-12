const db = require('../config/db'); // DB 연결 파일
const Item = require('../models/itemModel'); // 모델 불러오기
const User = require('../models/userModel');
// 수정된 코드 (예: controller 파일 상단)
const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

// 함수 실행해서 모델 생성
const UserItem = require('../models/userItemModel')(sequelize, DataTypes);

exports.buyItem = async (req, res) => {
    console.log(req.body);
    const { id: id, name: name } = req.body;

    try {
        // 아이템 정보 가져오기
        const item = await Item.findOne({ where: { name } });
        if (!item) return res.status(404).json({ message: '아이템을 찾을 수 없습니다' });

        // 유저 정보 확인
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: '사용자를 찾을 수 없습니다' });

        // 돈 부족 확인
        if (user.money < item.price) {
            return res.status(400).json({ message: '돈이 부족합니다' });
        }

        // 유저 머니 차감
        user.money -= item.price;
        await user.save();

        // 아이템 추가 (이미 있다면 count += 1)
        const [userItem, created] = await UserItem.findOrCreate({
            where: { user_id: user.id, item_id: item.id },
            defaults: { count: 1 },
        });

        if (!created) {
            userItem.count += 1;
            await userItem.save();
        }

        return res.status(200).json({
            message: '아이템 구매 성공',
            userId: user.id,
            itemId: item.id,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: '서버 오류', error: err.message });
    }
};
