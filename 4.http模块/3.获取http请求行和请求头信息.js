
const http = require('http');

const server = http.createServer((req, res) => {
    // 1. 获取请求行的请求方法
    console.log(req.method);

    // 2. 获取请求的 URL 地址
    console.log(req.url);   // 只包含路径与查询字符串

    // 3. 获取 HTTP 协议的版本号
    console.log(req.httpVersion);

    // 4. 获取 HTTP 的请求头
    console.log(req.headers);

    res.end('Hello Node.js');
});

server.listen(80, () => {
    console.log('Server is running...');
});