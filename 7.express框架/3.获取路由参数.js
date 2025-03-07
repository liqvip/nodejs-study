const express = require('express');

const app = express();

app.get('/:id.html', (req, res) => {
    // 获取 URL 路由参数
    console.log(req.params.id);
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('Hello Node.js');
});

app.listen(80, () => {
    console.log('server is running, listening on port 80');
});