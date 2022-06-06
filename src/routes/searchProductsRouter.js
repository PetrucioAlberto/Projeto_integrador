const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


routes.get('/', productsController.pesquisaProdutos);



module.exports = routes;