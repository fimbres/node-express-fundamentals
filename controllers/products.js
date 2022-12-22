const getProducts = (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId });
    }
    else{
        response.status(404).send('Product does not exit');
    }
};

const createProduct = (request, response) => {
    response.status(200).json(request.body);
};

const updateProduct = (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId, data: request.body });
    }
    else{
        response.status(404).send('Product does not exit');
    }
};

const deleteProduct = (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId, status: 'deleted' });
    }
    else{
        response.status(404).send('Product does not exit');
    }
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};