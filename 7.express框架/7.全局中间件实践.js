
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// 声明中间件函数
const recordMiddleware = (req, res, next) => {
    // 读取 url 和 ip
    let { url, ip } = req;
    // 将信息保存在文件中 access.log
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\n`);
    // 调用 next() 方法，将控制权交给下一个中间件
    next();
};

// 使用中间件
app.use(recordMiddleware);

app.get('/home', (req, res) => {
    res.send('home');
});

app.get('/admin', (req, res) => {
    res.send('admin');
});

app.all('*', (req, res) => {
    res.send('404');
});

app.listen(80, () => {
    console.log('server is running, listening on port 80');
});