const express = require('express');
const routes = express.Router();
const path = require('path');
const bodyParser = require('body-parser');


// ************ Controller Require ************
let userController = require('../controllers/userController');
//middlewares 
let validators = require('../midllewares/validaForms');
let logDB = require('../midllewares/logDB');
let db = require('../models/index');


// const validacao = require('../middlewares/validacao');



//Routes usuario

// routes.get('/', mainController.index);
routes.get('/', userController.login);
routes.get('/cadastro', userController.formUser);
routes.post('/cadastro', validators, userController.salvarCadastro);
routes.get('/sucesso', userController.sucessoUser);

/////////////////////////////////////////user CRUD///////////////////////////////////////////////////////
routes.get('/users', userController.allUsers);
routes.post('/users', logDB, userController.addUser);
routes.put('/users/:id', userController.updateUser);
routes.delete('/users/:id', userController.delUser);

//////////////////////////////////////// FK_usuarios /////////////////////////////////////////////////////////////////
routes.get('/endRes', userController.AllEndRes);
routes.get('/endEnt', userController.AllEndEnt);
routes.get('/formaPgto', userController.AllEndEnt);


routes.get('/UserById/:id', userController.userFilter);
routes.get('/info', userController.infocadastro);






//export


module.exports = routes;