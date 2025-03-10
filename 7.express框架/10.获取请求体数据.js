/**
 * 按照要求搭建 http 服务
 * GET /login 显示表单网页
 * POST /login 获取表单中的 username 和 password
 */

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

// 解析 JSON 格式的请求体的中间件
const jsonParser = bodyParser.json()

// 解析 urlencoded 格式的请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './login.html'));
});


app.post('/login', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send('获取用户的数据');
});

app.listen(80, () => {
    console.log('server is running on port 80');
});