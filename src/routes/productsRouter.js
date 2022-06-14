const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
let productsController = require('../controllers/productsController');


routes.get('/', productsController.pesquisaProdutos);
routes.get('/produto_interno', productsController.produtoInterno);
routes.get('/minhas_compras', productsController.historicoDeCompras);



module.exports = routes; 