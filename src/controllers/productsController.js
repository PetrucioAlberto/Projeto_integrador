const path = require('path');
const fs = require('fs');

//logica de produtos

const productsController = {
    produtoInterno: (req, res, next) => {
        res.render('produtoInterno');
    }
    
}

module.exports = productsController;