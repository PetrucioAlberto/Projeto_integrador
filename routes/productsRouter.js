var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET products listing. */

router.get("/", productsController.produtoInterno)

module.exports = router;
