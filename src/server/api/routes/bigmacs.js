const express = require('express');
const router = express.Router();
const bigMacController = require('../controllers/bigmac');

/**
 * GET request to /bigmacs
 */
router.get('/', (req, res, next) => {
    let country = req.query.country;

    const bigMacData = bigMacController.getList(country);
    res.status(200).json({
        message: 'Successfully retreived Big Mac list',
        bigMacData
    });
});

/**
 * GET request to /bigmacs/random
 */
router.get('/random', (req, res, next) => {
    let notCountry = req.query.notCountry;

    const randomStats = bigMacController.getRandomCountryStats(notCountry);
    res.status(200).json({
        message: 'Successfully retreived Big Mac stats for random country other than: ' + notCountry,
        randomStats
    });
});


module.exports = router;