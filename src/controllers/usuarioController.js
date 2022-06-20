const fs = require('fs');
const path = require('path');
const {validationResult} = require("express-validator");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
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