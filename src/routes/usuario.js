// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.index); 

/*router.???('/search', mainController.search); */

module.exports = router;