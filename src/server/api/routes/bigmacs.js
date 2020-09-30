const express = require('express');
const router = express.Router();
const bigMacController = require('../controllers/bigmac');

/**
 * GET request to /bigmacs
 */
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'All Big Macs were fetched'
    });
});

/**
 * GET request to /bigmacs/:id
 */
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Big Mac with id was fetched'
    });
});

/**
 * POST create /bigmac
 */
router.post("/", async (req, res, next) => {
    const author = await bigMacController.createBigMac(req.body.name)
    res.status(201).json({
        message: "Created successfully",
        author
    })
});
  

module.exports = router;