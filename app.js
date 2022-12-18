const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (error, data) => {
            if(error){
                reject(error);
            }
            else{
                resolve(data);
            }
        })
    })
}

const start = async () => {
    try {
        const data = await getText('./assets/second-text.txt');
        console.log(data);
    } catch(error) {
        console.error(error);
    }
}

start();
