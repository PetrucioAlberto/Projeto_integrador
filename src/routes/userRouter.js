const express = require('express');
const routes = express.Router();

const bodyParser = require('body-parser');


// ************ Controller Require ************
let userController = require('../controllers/userController');
let validators = require('../midllewares/validaForms');
let logDB = require('../midllewares/logDB');

// const validacao = require('../middlewares/validacao');



//Routes usuario
// routes.get('/', mainController.index);
routes.get('/', userController.login);
routes.get('/cadastro', userController.formUser);
routes.post('/cadastro', express.json([bodyParser]), userController.criarUsuario);
routes.get('/sucesso', userController.sucessoUser);
routes.get('/todosUsuarios', userController.dataUsers);
routes.get('/usuariosFiltro/:id', userController.userFilter);
routes.get('/info', userController.infocadastro);






//export


module.exports = routes;