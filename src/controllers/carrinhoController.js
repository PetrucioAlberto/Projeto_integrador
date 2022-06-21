const path = require('path');
const fs = require('fs');

//logica de produtos

const carrinhoController = {
    carrinho: (req, res, next) => {
        res.render('carrinhoDeCompras');
    }
}

module.exports = carrinhoController;