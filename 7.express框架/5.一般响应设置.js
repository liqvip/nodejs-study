const express = require('express');

const app = express();

app.get('/response', (req, res) => {
    // 原生操作
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // res.setHeader('X-Powered-By', 'Node.js');
    // res.write('Hello Node.js');
    // res.end();

    // express 操作
    res.status(200).set('X-Powered-By', 'Node.js').send('Hello Node.js');
});

app.listen(80, () => {
    console.log('server is running, listening on port 80');
});