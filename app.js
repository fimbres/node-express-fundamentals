const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const data = await readFilePromise('./assets/second-text.txt', 'utf-8');
        console.log(data);
    } catch(error) {
        console.error(error);
    }
}

start();
