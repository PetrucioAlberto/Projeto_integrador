const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const partialsControllers = require('../controllers/partialsController');


//Routes



router.get('/', partialsControllers.footer);





//export

module.exports = router;