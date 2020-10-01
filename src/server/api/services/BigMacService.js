

const csv = require('csv-parser');
const fs = require('fs');

let bigMacList = [];

class BigMacService {
    constructor() {
        this.LoadCSVData();
        this.getList = this.getList.bind(this);
    }

    LoadCSVData() {
        fs.createReadStream('data/big-mac-index.csv')
            .pipe(csv())
            .on('data', (row) => {
                bigMacList.push(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });
    }

    getList() {
        return {BigMacList: bigMacList};
    }

}

module.exports = BigMacService;