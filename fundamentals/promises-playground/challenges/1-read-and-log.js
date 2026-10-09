// Use fs/promises to read a file
// In the file 1-read-and-log.js require in fs/promises (Note: this is a module that is built into Node JS, so does not need to be installed separately).

// Use the fs/promises readFile method to read the contents of secret-message.txt and log the result to the terminal.

// Hint: If you are getting a 'no such file' error with your readFile path, think about which directory you are inside in your terminal (i.e. where you are running the file from).
const fs = require('fs/promises');
//console.log(fs)

fs.readFile(`${__dirname}/secret-message.txt`).then((fileContent) => {
    const content = fileContent.toString()
    console.log(content);
})