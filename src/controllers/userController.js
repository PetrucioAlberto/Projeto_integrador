const path = require('path');
const fs = require('fs');


//logica de usuários

let userController = {
    cadastroLogin: (req, res, next) => {
        res.render('cadastroLogin');        
    },
    cadastroUser: (req, res, next) => {
        res.render('cadastroUser');       
    }
    
}


module.exports = userController;