
const express = require('express');
const app = express();
const path = require('path');

// 静态资源中间件设置
app.use(express.static(path.resolve(__dirname, './public')));

app.get('/home', (req, res) => {
    res.send('home');
});

app.all('*', (req, res) => {
    res.send('404');
});

app.listen(80, () => {
    console.log('server is running, listening on port 80');
});