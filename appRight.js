const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const http = require('http');
const sequelize = require('./config/db');

// 라우터
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const requestProblemRoutes = require('./routes/requestProblemRoutes');
const answerProblemRoutes = require('./routes/answerProblemRoutes');
const itemRoutes = require('./routes/itemRoutes');
const getUserInfoRoutes = require('./routes/getUserInfoRoutes');

const app = express();

// ✅ CORS, JSON 처리 먼저
app.use(cors());
app.use(express.json());

// ✅ 라우터 연결
app.use('/', signupRoutes);
app.use('/', loginRoutes);
app.use('/', requestProblemRoutes);
app.use('/', answerProblemRoutes);
app.use('/', itemRoutes);
app.use('/', getUserInfoRoutes);

// 기본 라우트
app.get('/', (req, res) => {
  console.log('HTTP 요청 들어옴!');
  res.send('OK');
});

// DB 연결 확인
sequelize.authenticate()
  .then(() => console.log('✅ DB 연결 성공'))
  .catch(err => console.error('❌ DB 연결 실패:', err));

// SSL 인증서
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/edurun.shop/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/edurun.shop/fullchain.pem')
};

// ✅ HTTPS 서버 시작
https.createServer(options, app).listen(443, () => {
  console.log('✅ HTTPS 서버 실행 중 (443)');
});

// ✅ HTTP → HTTPS 리디렉션
http.createServer((req, res) => {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80);

