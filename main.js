const fs = require('fs');

const inputFile = 'data.json';

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);

        const necessaryData = jsonData.map(item => `${item.exchangedate}:${item.rate}`);

        const outputData = necessaryData.join('\n');

        const outputFile = 'output.txt';

        fs.writeFile(outputFile, outputData, 'utf8', err => {
            if (err) {
                console.error('Error writing', err);
                return;
            }
            console.log('Data written to output.txt');
        });
    } catch (jsonParseError) {
        console.error('Error:', jsonParseError);
    }
});
