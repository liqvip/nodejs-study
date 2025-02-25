
const http = require('http');

const server = http.createServer((req, res) => {
    // 1. 设置响应状态码
    res.statusCode = 200;
    // 2. 设置响应状态的描述
    res.statusMessage = 'OK';
    // 3. 设置响应头
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 4. 设置响应体
    res.write('<h1>Hello Node.js</h1>');
    res.end();
});


server.listen(80, () => {
    console.log('Server is running...');
});