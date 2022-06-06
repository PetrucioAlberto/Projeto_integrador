const path = require('path');
const fs = require('fs');

//logica de produtos

const productsController = {    
    
    pesquisaProdutos: (req, res, next) => {
        res.render('pesquisa')
    },

    produtoInterno: (req, res, next) => {
        res.render('produtoInterno');
        
    }
}

module.exports = productsController;