// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.home); 

/*
/*** CREATE ONE PRODUCT ***/ 
router.get("/create", productsController.createForm);
router.post('/create',productsController.create)



/*** EDIT ONE PRODUCT ***/ 
router.get("/edit/:id", productsController.editForm);
router.put("/edit/:id", productsController.editProcess);

router.get("/delete/:id", productsController.deleteForm);
router.delete("/delete/:id", productsController.delete);



/*** DELETE ONE PRODUCT***/ 
//router.???('/:id', productsController.destroy); 


module.exports = router;
