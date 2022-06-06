const path = require('path');
const fs = require('fs');



//lógica principal

let mainController = {
    index: (req, res, next) => {
        res.render('index');
        
    }   

}

module.exports = mainController;