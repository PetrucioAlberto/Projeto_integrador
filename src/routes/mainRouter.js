const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');


//Routes

routes.get('/', mainController.index);





//export

module.exports = routes;