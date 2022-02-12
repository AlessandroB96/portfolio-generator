const fs = require('fs');

//creating 2 functions that return a promise 
// 1.) Writing a file 
// 2.) Copying a file 

//This will execute an asyncronous function using .then and .catch methods to handle response 


//creating your own javascript promise
//the javascript object "new" allows for a new promise object to be created
//resolve and reject are 2 functions that will be called on to run async functionality
//resolve will run if code executes successfully, reject if fails
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
                // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
                if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

//copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
            reject(err);
            return;
            }
            console.log('Style sheet copied successfully!');
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
}

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };

//to prevent redundancy and have cleaner code, instead we can write the export object this way: 

module.exports = { writeFile, copyFile };