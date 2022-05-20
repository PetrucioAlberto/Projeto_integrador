const path = require('path');
const fs = require('fs');


//logica principal

const mainController = {
    index: (req, res, next) => {
        res.render('index');
    }

}



module.exports = mainController;