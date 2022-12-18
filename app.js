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

getText('./assets/second-text.txt').then(result => console.log(result)).catch(error => console.error(error));
