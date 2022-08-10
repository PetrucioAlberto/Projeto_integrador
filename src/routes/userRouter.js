const express = require('express');
const routes = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const auth = require('../midllewares/validaForms');

// ************ Controller Require ************
let userController = require('../controllers/userController');
//middlewares 
let Uservalidator = require('../midllewares/validaForms');
let logDB = require('../midllewares/logDB');
let db = require('../models/index');


// const validacao = require('../middlewares/validacao');



//Routes usuario


//////////////////////////////////////// login /////////////////////////////////////////////////////////////////
routes.get('/login', userController.login);
routes.post('/login', userController.logarUsuario);
routes.get('/cadastro', userController.formUser);
routes.get('/info', userController.infocadastro);





/////////////////////////////////////////user CRUD///////////////////////////////////////////////////////
routes.post('/cadastro', Uservalidator, logDB, userController.addUser);
routes.get('/consulta', userController.allUsers);
routes.get('/consulta/:id', userController.userById);
routes.put('/atualizar/:id', userController.updateUser);
routes.delete('/deletar/:id', userController.delUser);

routes.get('/login/:email', userController.userByEmail)


//export


module.exports = routes;