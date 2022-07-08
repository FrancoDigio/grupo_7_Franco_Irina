const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");
const bcryptjs = require('bcryptjs');
const db = require('../database/models');

//const User = require('../database/models/user.js');

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
		res.render('usuario')
	},
	processForm: (req,res) => {
		const validation = validationResult(req);
		if (validation.errors.length > 0 ) {
			return res.render("usuario",{
				errors: validation.mapped()
			} )
		}
	}
	
};

module.exports = controller;