const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, './pages/home.html'));
});

app.all('*', (request, response) => {
    response.status(404).send('Resource Not Available.');
});

app.listen(5000, () => {
    console.log("Server is listening in port 5000")
});
