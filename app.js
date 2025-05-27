require('dotenv').config(); // 환경변수 로드
const { Sequelize } = require('sequelize');

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const http = require('http');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
});
// 라우터
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const requestProblemRoutes = require('./routes/requestProblemRoutes');
const answerProblemRoutes = require('./routes/answerProblemRoutes');
const itemRoutes = require('./routes/itemRoutes');
const getUserInfoRoutes = require('./routes/getUserInfoRoutes');
const userRankingRoutes = require('./routes/userRankingRoutes');

const app = express();

// ✅ CORS, JSON 처리
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

// 기본 라우트
app.get('/', (req, res) => {
    console.log('HTTP 요청 들어옴!');
    res.send('OK');
});

// ✅ DB 연결 확인
sequelize
    .authenticate()
    .then(() => console.log('✅ DB 연결 성공'))
    .catch((err) => console.error('❌ DB 연결 실패:', err));

// ✅ 환경에 따라 HTTP/HTTPS 분기
if (process.env.NODE_ENV === 'production') {
    const options = {
        key: fs.readFileSync('/etc/letsencrypt/live/edurun.shop/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/edurun.shop/fullchain.pem'),
    };

    // ✅ HTTPS 서버 실행 (443)
    https.createServer(options, app).listen(443, () => {
        console.log('✅ [PROD] HTTPS 서버 실행 중 (443)');
    });

    // ✅ HTTP → HTTPS 리디렉션 (80)
    http.createServer((req, res) => {
        res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
        res.end();
    }).listen(80);
} else {
    // ✅ 개발 환경에서는 HTTP만 사용 (3000)
    http.createServer(app).listen(3000, () => {
        console.log('✅ [DEV] 개발용 HTTP 서버 실행 중 (3000)');
    });
}
