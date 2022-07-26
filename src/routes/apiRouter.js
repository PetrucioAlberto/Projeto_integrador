
const express = require('express');
const routes = express.Router();
const apiController = require('../controllers/apiController')


// routes.get('/', apiController.getStates);
routes.get('/', apiController.getCountries);




module.exports = routes;