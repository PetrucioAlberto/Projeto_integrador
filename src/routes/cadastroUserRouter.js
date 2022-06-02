const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require('../controllers/userController');



//Routes

router.get('/', userController.cadastroUser);

//export


module.exports = router;