// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const pedidosController = require('../controllers/pedidosController');

router.get('/', pedidosController.index); 

/*router.???('/search', mainController.search); */

module.exports = router;