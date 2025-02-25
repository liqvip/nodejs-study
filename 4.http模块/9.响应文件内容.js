
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let html = fs.readFileSync(path.resolve(
        __dirname, 'index.html',
    ));

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
});

server.listen(80, () => {
    console.log('Server is running...');
});