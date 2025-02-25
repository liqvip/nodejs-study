
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
};

/**
 * 静态资源目录和网站根目录是同一个，只是说法不一样
 */
const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    let resData;
    let root = path.resolve(__dirname, 'page');
    let filePath = root + url.pathname;


    fs.readFile(filePath, (err, data) => {
        if(err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            resData = '404 Not Found';
            res.end(resData);
            return ;
        }

        let suffix = path.extname(filePath);
        let mimeType = mimes[suffix];
        if(mimeType) {
            res.setHeader('Content-Type', mimeType + '; charset=utf-8');
        } else {
            res.setHeader('Content-Type', 'application/octet-stream');
        }

        resData = data;
        res.end(resData);
    });
});

server.listen(80, () => {
    console.log('Server is running...');
});