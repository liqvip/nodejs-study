const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    let data = url.parse(req.url, true);

    console.log(data);

    // 路径
    let pathName = data.pathname;
    console.log(`pathname: ${pathName}`);

    // 查询字符串
    let keyword = data.query.keyword;
    console.log(`keyword: ${keyword}`);

    res.end("Hello Node.js");
});

server.listen(80, () => {
    console.log('Server is running...');
});