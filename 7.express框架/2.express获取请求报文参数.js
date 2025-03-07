const express = require('express');

const app = express();

app.get('/request', (req, res) => {
    // 原生操作
    console.log(req.method);
    console.log(req.url);   // 只包含路径与查询字符串
    console.log(req.httpVersion);
    console.log(req.headers);


    // express 操作
    console.log(req.path);  // 获取路径
    console.log(req.query); // 获取查询字符串参数
    console.log(req.ip);    // 获取客户端的 IP 地址
    console.log(req.get('host'));   // 获取请求头中的 Host 字段

    res.end('Hello Node.js');
});

app.listen(80, () => {
    console.log('server is running, listening on port 80');
});