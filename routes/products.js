const express = require('express');
const router = express.Router();

router.get('/:productId', (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId });
    }
    else{
        response.status(404).send('Product does not exit');
    }
});

router.put('/:productId', (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId, data: request.body });
    }
    else{
        response.status(404).send('Product does not exit');
    }
})

router.delete('/:productId', (request, response) => {
    const { productId } = request.params;
    const isInvalid = productId.match(/[a-z]/i);

    if(!isInvalid){
        response.status(200).json({ productId, status: 'deleted' });
    }
    else{
        response.status(404).send('Product does not exit');
    }
})

module.exports = router;
