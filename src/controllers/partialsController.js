const path = require('path');
const fs = require('fs');


//logica de usuários

const partialsControllers =  {
    footer: (req, res, next) => {
         res.render('partials/footer');
    },
    header: (req, res, next) => {
        res.render('partials/header');
    },
    head: (req, res, next) => {
        res.render('partials/head');
    }

}


module.exports = partialsControllers;