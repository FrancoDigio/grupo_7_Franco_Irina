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
		res.render('usuario2')
	},

	ingresar: (req,res) =>{
		const errors = validationResult(req);
		
		if(errors.isEmpty()){
		  let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/UsersDataBase.json')));
		  let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
		  
		  delete usuarioLogueado.password;
		  req.session.usuario = usuarioLogueado;  
		  if(req.body.recordarme){
			res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
		  }
		  return res.redirect('./');  
  
		}else{
		 
		  res.render(path.resolve(__dirname, '../views/usuario2'),{errors:errors.mapped(),old:req.body});        
		}
	  },
	
	
};

module.exports = controller;