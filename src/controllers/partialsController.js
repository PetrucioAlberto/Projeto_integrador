const path = require('path');
const fs = require('fs');
const {
    validationResult
} = require('express-validator');



//logica de usuários

const partialsControllers = {
    footer: (req, res, next) => {
        res.render('partials/footer')
    },
    header: (req, res, next) => {

        res.render('partials/header');
    },
    head: (req, res, next) => {
        res.render('partials/head');
    },

    forms: (req, res, next) => {

        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped());
            res.render('partials/head', { errors});
        }


    },

}


module.exports = partialsControllers;