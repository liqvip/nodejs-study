const http = require('http');

const server = http.createServer((req, res) => {
    let url = new URL(req.url, 'http://localhost');
    console.log(url);

    // 路径
    let pathName = url.pathname;
    console.log(`pathname: ${pathName}`);

    // 查询字符串
    let keyword = url.searchParams.get('keyword');
    console.log(`keyword: ${keyword}`);

    res.end("Hello Node.js");
});

server.listen(80, () => {
    console.log('Server is running...');
});