const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./pages/home.html', 'utf-8');
const aboutPage = readFileSync('./pages/about.html', 'utf-8');
const errorPage = readFileSync('./pages/404.html', 'utf-8');

http.createServer((request, response) => {
    if(request.url === '/'){
        response.writeHead(200, { 'content-type': 'text/html'});
        response.write(homePage);
        response.end();
    } else if(request.url === '/about') {
        response.writeHead(200, { 'content-type': 'text/html'});
        response.write(aboutPage);
        response.end();
    } else {
        response.writeHead(200, { 'content-type': 'text/html'});
        response.write(errorPage);
        response.end();
    }
}).listen(5000);
