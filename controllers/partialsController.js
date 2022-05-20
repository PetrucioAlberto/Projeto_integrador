const path = require('path');
const fs = require('fs');



let partialsController = {
    header: (req, res, next) => {
        res.render('partials/header');
    },

    footer: (req, res, next) => {
        res.render('partials/footer');
    }
    
}


module.exports = partialsController;
    
