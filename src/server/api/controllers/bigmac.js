const BigMacService = require( "../services/BigMacService" );
const BigMacServiceInstance = new BigMacService();


module.exports = { 
    getList: () => {
        const bigMacList = BigMacServiceInstance.getList();
        return bigMacList;
    },
}
