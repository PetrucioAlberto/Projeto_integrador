const express = require('express');
const routes = express.Router();
const auth = require('../midllewares/auth');


// ************ Controller Require ************
let carrinhoController = require('../controllers/carrinhoController');







routes.get('/', auth, carrinhoController.carrinho);


module.exports = routes; 