const fs = require('fs');
const readline = require('readline');

const filePath = 'output.txt';

const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});
rl.on('line', (line) => {
    console.log(JSON.parse(line)["exchangedate"], JSON.parse(line)["rate"])

});
