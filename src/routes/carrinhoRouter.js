const express = require('express');
const { router } = require('../app');
const routes = express.Router();

// ************ Controller Require ************
let carrinhoController = require('../controllers/carrinhoController');







routes.get('/', carrinhoController.carrinho);





module.exports = routes; 