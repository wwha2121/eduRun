require('dotenv').config(); // 환경변수 로드
const { Sequelize } = require('sequelize');
const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();

// ✅ DB 설정
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
});

// ✅ 라우터
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const requestProblemRoutes = require('./routes/requestProblemRoutes');
const answerProblemRoutes = require('./routes/answerProblemRoutes');
const itemRoutes = require('./routes/itemRoutes');
const getUserInfoRoutes = require('./routes/getUserInfoRoutes');
const userRankingRoutes = require('./routes/userRankingRoutes');

// ✅ 미들웨어
app.use(cors());
app.use(express.json());

// ✅ 라우터 연결
app.use('/', signupRoutes);
app.use('/', loginRoutes);
app.use('/', requestProblemRoutes);
app.use('/', answerProblemRoutes);
app.use('/', itemRoutes);
app.use('/', getUserInfoRoutes);
app.use('/', userRankingRoutes);

// ✅ 기본 라우트
app.get('/', (req, res) => {
    console.log('HTTP 요청 들어옴!');
    res.send('OK');
});

// ✅ DB 연결 확인
sequelize
    .authenticate()
    .then(() => console.log('✅ DB 연결 성공'))
    .catch((err) => console.error('❌ DB 연결 실패:', err));

// ✅ HTTP 서버 실행 (3000 포트)
const PORT = 3000;

http.createServer(app).listen(PORT, () => {
    console.log(`✅ [서버 실행 중] http://localhost:${PORT}`);
});
