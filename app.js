const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./pages/index.html', 'utf-8');

http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html'});
    response.write(homePage);
    response.end();
}).listen(5000);
