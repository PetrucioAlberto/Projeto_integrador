const express = require('express');

const routes = express.Router();

// ************ Controller Require ************
const partialsControllers = require('../controllers/partialsController');


//Routes




routes.get('/', partialsControllers.header);




//export

module.exports = routes;