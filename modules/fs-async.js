const { readFile, writeFile } = require('fs');

readFile('./assets/subfolder/text.txt', 'utf-8', (error, result) => {
    if(error){
        console.error(error);
        return;
    }

    const firstText = result;

    writeFile('./assets/async-result.txt', `This is the result: ${firstText}...`, 'utf-8', (error, result) => {
        if(error){
            console.error(error);
            return;
        }

        console.log(result);
    })
});

