// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*
/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.formNew);
router.post('/',productsController.create)

/*** GET ONE PRODUCT ***/ 
//router.???('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.put('/producto/:id',(req,res)=>{
    let id_producto = req.params.id
    producto.filter(elem => {
        if (elem.id == id_producto) {
            elem.descripcion = req.body.descripcion
            elem.precio = req.body.precio
        }
    })
})


/*** DELETE ONE PRODUCT***/ 
//router.???('/:id', productsController.destroy); 


module.exports = router;
