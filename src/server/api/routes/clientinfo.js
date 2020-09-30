const express = require('express');
const router = express.Router();
const clientInfoController = require('../controllers/clientinfo');

/**
 * GET request to /clientinfo
 */
router.get('/:ip', async (req, res, next) => {
    const clientCountry = await clientInfoController.getClientCountry(req.params.ip);
    res.status(200).json({
        message: 'Successfully retreived client information',
        clientCountry
    });
});
  

module.exports = router;