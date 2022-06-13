const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
let userController = require('../controllers/userController');
let mainController = require('../controllers/mainController');




//Routes usuario
routes.get('/', mainController.index);
routes.get('/cadastro', userController.cadastro);
routes.get('/login', userController.login);
routes.get('/info', userController.infocadastro);






//export


module.exports = routes;