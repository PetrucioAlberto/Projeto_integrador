const path = require('path');
const fs = require('fs');


//logica de usuários

const userController = {
    login: (req, res, next) => {
        res.render('cadastroLogin');       
    },
    cadastro: (req, res, next) => {
        res.render('cadastroUser');
    }, 

    infocadastro: (req, res, next) => {
        res.render('infoUsuario')
    }
    
}


module.exports = userController;