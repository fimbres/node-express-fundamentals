const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({ firstName: "Isaac", lastName: "Fimbres" })
});

app.listen(5000, () => {
    console.log("Server is listening in port 5000")
});
