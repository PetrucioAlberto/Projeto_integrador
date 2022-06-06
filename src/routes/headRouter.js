const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
const partialsControllers = require('../controllers/partialsController');


//Routes


routes.get('/', partialsControllers.head);






//export

module.exports = routes;