const BigMacService = require( "../services/BigMacService" );
const BigMacServiceInstance = new BigMacService();


module.exports = { 
    getList: (country) => {
        const bigMacData = BigMacServiceInstance.getList(country);
        return bigMacData;
    },

    getRandomCountryStats: (notCountry) => {
        const randomCountryStats = BigMacServiceInstance.getRandomCountryStats(notCountry);
        return randomCountryStats;
    }
}
