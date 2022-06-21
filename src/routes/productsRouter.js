const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
let productsController = require('../controllers/productsController');


routes.get('/', productsController.pesquisaProdutos);
routes.get('/produtoInterno', productsController.produtoInterno);
routes.get('/minhasCompras', productsController.historicoDeCompras);



module.exports = routes; 


