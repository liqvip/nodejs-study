
const http = require('http');

const server = http.createServer((req, res) => {
    let body = '';
    // 1. 绑定 data 事件，用于获取请求体数据
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    // 2. 绑定 end 事件
    req.on('end', () => {
        console.log(body);
        res.end('Hello Node.js');
    });
});

server.listen(80, () => {
    console.log('Server is running...');
});