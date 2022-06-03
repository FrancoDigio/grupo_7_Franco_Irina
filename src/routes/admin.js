// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

router.get('/', adminController.index); 

/*router.???('/search', mainController.search); */

module.exports = router;
