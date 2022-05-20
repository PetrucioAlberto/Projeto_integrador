const path = require('path');
const fs = require('fs');

//logica de usuários

const userController = {
    cadastroLogin: (req, res, next) => {
        res.render('cadastroLogin', { link: 'index.ejs' });
    }
    
}






module.exports = userController;