const express = require('express');
const router = express.Router();

router.get('/query', (request, response) => {
    response.json(request.query);
});

router.get('/', (request, response) => {
    response.json({ firstName: "Isaac", lastName: "Fimbres" })
});

module.exports = router;
