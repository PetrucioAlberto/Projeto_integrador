const path = require('path');
const fs = require('fs');

//logica de produtos

const carrinhoController = {
    carrinho: (req, res, next) => {
        console.log('carrinho')
        res.render('carrinhoDeCompras');
    }
}

module.exports = carrinhoController; 