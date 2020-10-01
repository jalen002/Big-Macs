const express = require('express');
const router = express.Router();
const bigMacController = require('../controllers/bigmac');

/**
 * GET request to /bigmacs
 */
router.get('/', (req, res, next) => {
    const bigMacList = bigMacController.getList();
    res.status(200).json({
        message: 'Successfully retreived Big Mac list',
        bigMacList
    });
});
  

module.exports = router;