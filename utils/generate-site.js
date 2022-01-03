const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error reject the promise and send the error to the promise's catch()' method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesn't accidentally execute the resolve() function
                return;
            }

            // jif successful, resolve the promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/style.css', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Copied!'
            });
        });
    });
};


module.exports = { writeFile, copyFile };