const { readFileSync, writeFileSync } = require('fs');

const firstFile = readFileSync('./assets/subfolder/text.txt', 'utf-8');
const secondFile = readFileSync('./assets/second-text.txt', 'utf-8');

console.log(firstFile, secondFile);

writeFileSync('./assets/subfolder/text.txt', ', We are writing in the first file', { flag: 'a' });

