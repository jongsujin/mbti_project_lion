const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());
let resultData = [];
// POST 요청을 처리하기 위한 미들웨어 설정
app.use(express.json());

// POST 요청 핸들러
app.post('/api/mbti', (req, res) => {
  const mbti = req.body.mbti;
  // TODO: mbti 값에 대한 로직 처리 또는 저장 로직 구현
  console.log('Received MBTI:', mbti);
  resultData=[];
  resultData.push(mbti);
  res.sendStatus(200);
});

app.get('/api/result', (req, res) => {
  // TODO: 결과 데이터를 가져오는 로직 구현
  const latestResult = resultData[resultData.length - 1];
  res.json(latestResult);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});