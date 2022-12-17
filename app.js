const { isaac, girlfriend, mother } = require('./constants');

const sayHello = (name) => {
    console.log(`hello, ${name}`);
}

sayHello(isaac);
sayHello(mother);
sayHello('Peter');
sayHello(girlfriend);
