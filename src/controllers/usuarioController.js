const fs = require('fs');
const path = require('path');
const passport = require('passport');
const cookieParser = require("cookie-parser");
const session = require('express-session')
const {validationResult} = require("express-validator");
const bcryptjs = require('bcryptjs');
const db = require('../database/models');



const User = require('../database/models/Usuario.js');


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {

	create: (req,res) => {
		User.create({
			nombre:req.body.nombre,
			email: req.body.email,
			password: req.body.password
	})},

	index: (req, res) => {
		return res.render('usuario2')
	},

	ingresar: (req,res) =>{
		const result = validationResult(req);
		
		if(!result.isEmpty()){
			return res.render('usuario2', { errors: result.mapped(), 
			});
		};

		return res.render('index')
		
	}

}
		

module.exports = controller; 