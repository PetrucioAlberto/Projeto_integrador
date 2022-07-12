const { Router } = require('express');
const express = require('express');
const routes = express.Router();

// ************ Controller Require ************
let productsController = require('../controllers/productsController');

//produtos
routes.get('/acessorios', productsController.allAcessorios);
routes.get('/acessorios/:id', productsController.acessorioById);
routes.post('/acessorios/', productsController.addAcessorio);
routes.put('/acessorios/:id', productsController.updateAcessorio);
routes.delete('/acessorios/:id', productsController.delAcessorio);



routes.get('/plataformas', productsController.allPlataforma);
routes.get('/plataformas/:id', productsController.plataformaById);
routes.post('/plataformas', productsController.addPlataforma);
routes.put('/plataformas/id', productsController.updatePlataforma);
routes.delete('/plataformas/id', productsController.delPlataforma);




routes.get('/jogos', productsController.AllJogos);
routes.get('/giftcards', productsController.AllGiftCards);




routes.get('/', productsController.pesquisaProdutos);

routes.get('/produtoInterno', productsController.produtoInterno);
routes.get('/minhasCompras', productsController.historicoDeCompras);



module.exports = routes; 


