
const http = require('http');


/**
 * http.js - createServer
 *  |
 * _http_server - Server (this.on('request', requestListener), server.emit('request', req, res);)
 *  |
 * net.Server
 */
const server = http.createServer((req, res) => {

    /**
     * Request 对象的继承关系
     * Request
     *    |
     * IncomingMessage
     *
     * Response 对象的继承关系
     * Response
     *      |
     * ServerResponse (writeHead)
     *     |
     * OutgoingMessage (setHeader, end)
     */
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('你好\n');
});

/**
 * net.Server (listen)
 */
server.listen(80, () => {
    console.log('Server is running...');
});


