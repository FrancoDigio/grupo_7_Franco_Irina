// ************ Require's ************
const express = require('express');
const router = express.Router();

const {body} = require("express-validator");

// ************ Controller Require ************
const usuarioController = require('../controllers/usuarioController');

const validator = [
    body('name').notEmpty().withMessage('Debes completar el nombre'),
    body('email').notEmpty().withMessage('Debes completar el email'),
    body('password').notEmpty().withMessage('Debes completar la contraseña'),
    body('confirm').notEmpty().withMessage('Debes confirmar la constraseña'),

]

router.get('/', usuarioController.index); 

router.post('/',validator, usuarioController.processForm); 

module.exports = router;