const express = require('express');
const routes = express.Router();

// ************ Controller Require ************

const partialsControllers = require('../controllers/partialsController');
const validators = require('../midllewares/validaForms');
let userController = require('../controllers/userController');
let logDB = require('../midllewares/logDB');









//Routes


routes.get('/', partialsControllers.head);
routes.post('/', validators, logDB ,partialsControllers.forms);
routes.get('/info', userController.infocadastro);



module.exports = routes;  








//export

module.exports = routes;