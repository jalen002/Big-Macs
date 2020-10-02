const BigMacService = require( '../src/server/api/services/BigMacService' );
const BigMacServiceInstance = new BigMacService();


const assert = require('assert');
describe('Get most recent United States data', () => {
    it('Should return most recent US data from csv', () => {
        var result = BigMacServiceInstance.getList('United States');
        var expectedResult = {
            'Country': 'United States',
            'Date': '2016-01-01',
            'Dollar PPP': '1.0',
            'Dollar ex': '1.0',
            'Dollar price': '4.93',
            'Dollar valuation': '0.0',
            'Local price': '4.93',
        };
        assert.equal(country, expectedResult.Country);
    });
});