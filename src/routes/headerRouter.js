const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const partialsControllers = require('../controllers/partialsController');


//Routes


router.get('/', partialsControllers.header);






//export

module.exports = router;