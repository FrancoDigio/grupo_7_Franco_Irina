// ************ Require's ************
const express = require('express');
const router = express.Router();

const {body} = require("express-validator");

// ************ Controller Require ************
const usuarioController = require('../controllers/usuarioController');

const validacionesLogin = [
    
    body('email').notEmpty().withMessage('Debes completar el email'),
    body('password').notEmpty().withMessage('Debes completar la contraseña'),
    

]

router.get('/login', usuarioController.index); 

router.post('/login',validacionesLogin, usuarioController.ingresar); 

module.exports = router;