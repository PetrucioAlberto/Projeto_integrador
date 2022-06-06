const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
let productsController = require('../controllers/productsController');


routes.get('/', productsController.produtoInterno);



module.exports = routes;