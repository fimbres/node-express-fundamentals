const authorize = (request, response, next) => {
    const { user } = request.query;

    if(user === "Isaac"){
        request.user = { name: "Isaac", age: 22 };
        next();
    }
    else{
        response.status(401).send('Unauthorized');
    }
}

module.exports = authorize;
