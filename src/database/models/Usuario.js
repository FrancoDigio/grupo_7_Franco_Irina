module.exports = function(sequelize, dataTypes) {
	let alias = "Usuario";
	let cols = {
		id : { 
			type: dataTypes.INTEGER, autoIncrement: true, primaryKey : true
		},
		nombre : {
			type : dataTypes.STRING
		},
		email : {
			type : dataTypes.STRING
		},
		password : {
			type : dataTypes.STRING
		}
	}
	let config = { tableName : 'users', timestamps:false}

	let Usuario = sequelize.define(alias, cols, config);

	return Usuario
} 