const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({ firstName: "Isaac", lastName: "Fimbres" })
});

app.get('/products/:productId', (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId });
    }
    else{
        response.status(404).send('Product does not exit');
    }
});

app.get('/query', (request, response) => {
    response.json(request.query);
});

app.listen(5000, () => {
    console.log("Server is listening in port 5000")
});
