
const http = require('http');

const server = http.createServer((req, res) => {
    const method = req.method;
    const pathname = new URL(req.url, 'http://localhost').pathname;

    if(pathname === '/login' && method === 'GET') {
        res.end('Login');
    } else if(pathname === '/register' && method === 'GET') {
        res.end('Register');
    } else {
        res.end('Not Found');
    }
});

server.listen(80, () => {
    console.log('Server is running...');
});
