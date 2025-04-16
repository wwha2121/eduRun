const express = require('express');
const app = express();
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');

app.use(express.json());
app.use('/', signupRoutes);
app.use('/', loginRoutes);

// 하나의 app.listen만 사용!
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
