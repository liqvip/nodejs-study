
const express = require('express');
const app = express();
const path = require('path');

// 声明防盗链中间件函数
const refererMiddleware = (req, res, next) => {
    // 获取请求头中的 referer 字段
    let referer = req.get('referer');
    if(referer) {
        const url = new URL(referer);
        const hostname = url.hostname;

        if(hostname && hostname !== '127.0.0.1') {
            res.status(404).send('404 Not Found');
            return;
        }
    }
    next();
};

app.use(refererMiddleware);
app.use(express.static(path.resolve(__dirname, './public')));

app.listen(80, () => {
    console.log('server is running on port 80');
});