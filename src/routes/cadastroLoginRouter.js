const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
const userController = require('../controllers/userController');



//Routes

routes.get('/', userController.cadastroLogin);


//export

module.exports = routes;