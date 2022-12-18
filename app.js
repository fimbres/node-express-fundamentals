const fs = require('fs');
const http = require('http');

http.createServer((_, res) => {
    const fileStream = fs.createReadStream('./assets/second-text.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', (error) => {
        res.end(error);
    });
    res.end();
}).listen(5000);
