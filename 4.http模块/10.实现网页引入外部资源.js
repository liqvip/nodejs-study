
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    let resData;
    if(url.pathname === '/') {
        resData = fs.readFileSync(path.resolve(
            __dirname, 'index.html',
        ));
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
    } else if (url.pathname === '/index.css') {
        resData = fs.readFileSync(path.resolve(
            __dirname, 'index.css',
        ));
        res.setHeader('Content-Type', 'text/css; charset=utf-8');
    } else if (url.pathname === '/index.js') {
        resData = fs.readFileSync(path.resolve(
            __dirname, 'index.js',
        ));
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    } else {
        res.statusCode = 404;
        resData = '404 Not Found';
    }

    res.end(resData);
});

server.listen(80, () => {
    console.log('Server is running...');
});