const fs = require('fs');
const path = require('path');



const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	home: (req, res) => {
		res.render("productos", {products:products})
	},

	
	createForm: (req, res) => {
		res.render("create", {products});
	  },

	
	create: function(req, res) {
	let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    
    let nuevoProducto = {
      id: productos[productos.length - 1].id + 1,
      nombre: req.body.nombre,
      precio: req.body.precio,
      imagen: "defaultImg.jpg",
    };

    productos.push(nuevoProducto);
    
    let nuevoProductoGuardar = JSON.stringify(productos, null, 2);
    fs.writeFileSync(productsFilePath, nuevoProductoGuardar, "utf-8");
    
    res.redirect("/productos");
		
       },
	
	editForm: (req, res) => {
	let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
	
	const id = req.params.id;
	let productoEditar = productos.find((prod) => prod.id == id);
	res.render("edit", { productoEditar });
	},
	
	

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;