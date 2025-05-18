const express = require('express');
const app = express();
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const requestProblemRoutes = require('./routes/requestProblemRoutes');
const answerProblemRoutes = require('./routes/answerProblemRoutes');
const itemRoutes = require('./routes/itemRoutes');
const getUserInfoRoutes = require('./routes/getUserInfoRoutes');

app.use(express.json());
app.use('/', signupRoutes);
app.use('/', loginRoutes);
app.use('/', requestProblemRoutes);
app.use('/', answerProblemRoutes);
app.use('/', itemRoutes);
app.use('/', getUserInfoRoutes);

// 하나의 app.listen만 사용!
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
