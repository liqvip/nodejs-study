
/**
 * 针对 /admin /setting 的请求，要求 URL 携带 code = 521 参数，如未携带提示 [暗号错误]
 */
const express = require('express');
const app = express();

// 声明中间件函数
const checkCodeMiddleware = (req, res, next) => {
    let { code } = req.query;
    if (code === '521') {
        next();
    } else {
        res.send('暗号错误');
    }
}

app.get('/home', (req, res) => {
    res.send('home');
});

app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('admin');
});

app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('admin');
});

app.all('*', (req, res) => {
    res.send('404');
});

app.listen(80, () => {
    console.log('server is running, listening on port 80');
});