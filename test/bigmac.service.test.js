const BigMacService = require( '../src/server/api/services/BigMacService' );
var BigMacServiceInstance = new BigMacService();



const assert = require('assert');
const { doesNotMatch } = require('assert');

describe('Get most recent Country data', () => {

    before(function () {
        return BigMacServiceInstance.LoadCSVData();
    });

    it('Should return most recent Brazil data from csv', () => {
        var result = BigMacServiceInstance.getList('Brazil');
        var expectedResult = {
            'Country': 'Brazil',
            'Date': '2016-01-01',
            'Dollar PPP': '2.7383367139959436',
            'Dollar ex': '4.0248',
            'Dollar price': '3.3542039355992843',
            'Dollar valuation': '-31.963409014213283',
            'Local price': '13.5',
        };
        assert.equal(result.Country, expectedResult.Country);
        assert.equal(result.Date, expectedResult.Date);
        assert.equal(result['Dollar PPP'], expectedResult['Dollar PPP']);
        assert.equal(result['Dollar ex'], expectedResult['Dollar ex']);
        assert.equal(result['Dollar price'], expectedResult['Dollar price']);
        assert.equal(result['Dollar valuation'], expectedResult['Dollar valuation']);
        assert.equal(result['Local price'], expectedResult['Local price']);
    });

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
        assert.equal(result.Country, expectedResult.Country);
        assert.equal(result.Date, expectedResult.Date);
        assert.equal(result['Dollar PPP'], expectedResult['Dollar PPP']);
        assert.equal(result['Dollar ex'], expectedResult['Dollar ex']);
        assert.equal(result['Dollar price'], expectedResult['Dollar price']);
        assert.equal(result['Dollar valuation'], expectedResult['Dollar valuation']);
        assert.equal(result['Local price'], expectedResult['Local price']);
    });
});