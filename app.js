const express = require('express');
const morgan = require('morgan');
const logger = require('./middleware/logger.js');
const authorize = require('./middleware/authorize.js');
const main = require('./routes/main');
const products = require('./routes/products');
const auth = require('./routes/auth');

const app = express();

app.use([logger, authorize, morgan('tiny')]);
app.use('/', main);
app.use('/products', products);
app.use('/login', auth);

app.listen(5000, () => {
    console.log("Server is listening in port 5000")
});
