const express = require('express');
const router = express.Router();
const clientInfoController = require('../controllers/clientinfo');

/**
 * GET request to /clientinfo/{ip}
 */
router.get('/:ip', async (req, res, next) => {
    //const clientCountry = await clientInfoController.getClientCountry(req.params.ip);
    res.status(200).json({
        message: 'Successfully retreived client information',
        //clientCountry
        clientCountry: {user_country: 'United States'}
    });
});
  

module.exports = router;