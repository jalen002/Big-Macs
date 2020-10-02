

const csv = require('csv-parser');
const fs = require('fs');

let bigMacList = [];

class BigMacService {
    constructor() {
        this.LoadCSVData();
        this.getList = this.getList.bind(this);
    }

    LoadCSVData() {
        return new Promise((resolve, reject) => {
            fs.createReadStream('data/big-mac-index.csv')
            .pipe(csv())
            .on('data', (row) => {
                bigMacList.push(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
                resolve(bigMacList);
            });
        });
    }

    getList(country) {
        let result = country ? this.getMostRecentForCountry(country) : bigMacList;
        return result;
    }

    getRandomCountryStats(notCountry) {
        let notCountryList = bigMacList.filter((bm) => {
            return bm.Country != notCountry;
        });

        let randomIndex = parseInt(this.getRandomBetweenMinMax(0, notCountryList.length - 1));
        let result = this.getMostRecentForCountry(notCountryList[randomIndex].Country);
        return result;
    }

    getRandomBetweenMinMax(min, max) {
        return Math.random() * (max - min) + min;
    }

    getMostRecentForCountry(country) {
        let result = bigMacList.filter((bm) => {
            return country ? (bm.Country == country) : true;
        }).sort((bm1, bm2) => {
            return Date.parse(bm2.Date) - Date.parse(bm1.Date);
        });

        return result[0];
    }

}

module.exports = BigMacService;