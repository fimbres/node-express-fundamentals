const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', (request, response) => {
    response.status(200).send('<h1>About Page</h1>');
});

app.all('*', (request, response) => {
    response.status(404).send('<h1>Resource Not Found</h1>');
});

app.listen(5000, () => {
    console.log("The server is listening in port 5000");
});
