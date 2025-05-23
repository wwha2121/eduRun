const express = require('express');
const app = express();
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const requestProblemRoutes = require('./routes/requestProblemRoutes');
const answerProblemRoutes = require('./routes/answerProblemRoutes');
const itemRoutes = require('./routes/itemRoutes');
const getUserInfoRoutes = require('./routes/getUserInfoRoutes');
const sequelize = require('./config/db');

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/edurun.shop/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/edurun.shop/fullchain.pem')
};

const http = require('http');


https.createServer(options, app).listen(443, () => {
  console.log('HTTPS 서버 실행됨!');
});

app.use(express.json());
app.use('/', signupRoutes);
app.use('/', loginRoutes);
app.use('/', requestProblemRoutes);
app.use('/', answerProblemRoutes);
app.use('/', itemRoutes);
app.use('/', getUserInfoRoutes);
app.get('/', (req, res) => {
    console.log('HTTP 요청 들어옴!');
    res.send('OK');
});
const cors = require('cors');

app.use(cors());
sequelize.authenticate()
  .then(() => console.log('✅ DB 연결 성공'))
  .catch(err => console.error('❌ DB 연결 실패:', err));

// 하나의 app.listen만 사용!

const PORT = 80;
//app.listen(PORT, () => {
  //  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
//});
//
//
http.createServer((req, res) => {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80);
