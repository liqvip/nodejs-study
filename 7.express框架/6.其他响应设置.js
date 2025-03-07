const express = require('express');
const path = require('path');

const app = express();

app.get('/response', (req, res) => {
    // 跳转响应
    // res.redirect('https://www.baidu.com');
    //下载响应
    // res.download(path.resolve(__dirname, './package.json'));

    // JSON 响应
    // res.json({
    //     name: 'Node.js',
    //     type: 'backend'
    // });
    // 响应文件内容
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(80, () => {
    console.log('server is running, listening on port 80');
});