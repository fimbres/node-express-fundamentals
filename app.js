const EventEmitter = require('events');

const customEmmiter = new EventEmitter();

customEmmiter.on('response', () => {
    console.log("Data response")
});

customEmmiter.on('response', () => {
    console.log("Other data in response")
});

customEmmiter.emit('response');
