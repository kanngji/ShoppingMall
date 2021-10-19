// 서버 백엔드 작업

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.port || 3001;

app.use(cors());

app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'test'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
});