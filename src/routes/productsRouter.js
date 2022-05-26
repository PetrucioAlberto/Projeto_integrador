const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');



//Routes

router.get('/', productsController.produtoInterno);







//export

module.exports = router;