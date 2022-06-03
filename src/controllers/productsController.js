const fs = require('fs');
const path = require('path');

/*

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
*/

let products = [
    { id: 1, name: 'Product 1', price: 100, img: 'ruta..' },
    { id: 2, name: 'Product 2', price: 99, img: 'ruta..' },
    { id: 3, name: 'Product 3', price: 300, img: 'ruta..' }
]


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("productos", {products:products})
	},

	
	formNew: function(req, res) {
        return res.render('form');
    },

	
	create: function(req, res) {
		
        //guardo el nuevo producto con la estructura
        productos.push({ id: 99, name: req.body.name, price: req.body.price, img: 'ruta..' })

        //redireccione al listado de productos        
        return res.redirect('/products');},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;