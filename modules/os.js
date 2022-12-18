const os = require('os');

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

module.exports = currentOs;
