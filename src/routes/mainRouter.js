const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');


//Routes

router.get('/', mainController.index);







//export

module.exports = router;