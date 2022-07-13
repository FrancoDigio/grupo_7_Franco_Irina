module.exports = function(sequelize, dataTypes) {
	let alias = "Producto";
	let cols = {
		id : { 
			type: dataTypes.INTEGER, autoIncrement: true, primaryKey : true
		},
		nombre : {
			type : dataTypes.STRING
		},
		precio : {
			type : dataTypes.DECIMAL
		}
	}
	let config = { tableName : 'productos', timestamps:false}

	let Producto = sequelize.define(alias, cols, config);

	return Producto
} 