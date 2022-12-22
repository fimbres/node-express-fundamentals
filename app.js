const express = require('express');
const morgan = require('morgan');
const logger = require('./middleware/logger.js');
const authorize = require('./middleware/authorize.js');

const app = express();
app.use([logger, authorize, morgan('tiny')]);

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

app.put('/products:productId', (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId, data: request.body });
    }
    else{
        response.status(404).send('Product does not exit');
    }
})

app.delete('/products:productId', (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId, status: 'deleted' });
    }
    else{
        response.status(404).send('Product does not exit');
    }
})

app.get('/query', (request, response) => {
    response.json(request.query);
});

app.post('/login', (request, response) => {
    response.status(200).json(request.body);
});

app.listen(5000, () => {
    console.log("Server is listening in port 5000")
});
