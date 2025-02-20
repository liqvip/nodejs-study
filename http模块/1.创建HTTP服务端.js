
const http = require('http');


/**
 *
 * server net.Server
 */
const server = http.createServer((req, res) => {

    /**
     * Request 和 Response 对象的继承关系
     *
     * Request
     *    |
     * IncomingMessage
     *
     * Response
     *      |
     * ServerResponse (writeHead)
     *     |
     * OutgoingMessage (setHeader, end)
     */
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('你好\n');
});

server.listen(80, () => {
    console.log('Server is running...');
});


