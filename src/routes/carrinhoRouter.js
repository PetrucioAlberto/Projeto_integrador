const express = require('express');
const { router } = require('../app');
const routes = express.Router();
const auth = require('../midllewares/validaForms');


// ************ Controller Require ************
let carrinhoController = require('../controllers/carrinhoController');







routes.get('/', function (req, res, next) {
    if (req.session.usuario == !'undefined') {
        next()
    } else {
        return res.send('É necessário estar logado para acessar essa página')
    }
    
}, carrinhoController.carrinho);





module.exports = routes; 