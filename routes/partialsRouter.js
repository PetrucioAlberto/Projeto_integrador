var express = require('express');
var router = express.Router();
const partialsController = require('../controllers/partialsController');


/* GET partials.ejs listing. */

router.get("/", partialsController.header)
router.get("/", partialsController.footer)





module.exports = router;
