const http = require('http');

const server = http.createServer((request, result) => {
    result.write('Welcome to the server!');
    result.end();
})

server.listen(3000);