// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const saboresController = require('../controllers/saboresController');

router.get('/', saboresController.index); 

/*router.???('/search', mainController.search); */

module.exports = router;