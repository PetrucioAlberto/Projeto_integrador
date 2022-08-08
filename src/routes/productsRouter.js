const { Router } = require('express');
const express = require('express');
const routes = express.Router();
let productsController = require('../controllers/productsController');



// routes.get('/', productsController.allProducts);


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
routes.get('/jogos/:id', productsController.jogoById);
routes.post('/jogos', productsController.addJogo);
routes.put('/jogos/id', productsController.updateJogo);
routes.delete('/jogos/id', productsController.delJogo);


routes.get('/giftcards', productsController.allGiftCards);
routes.get('/giftcards/:id', productsController.giftCardById);
routes.post('/giftcards', productsController.addGiftCard);
routes.put('/giftcards/id', productsController.updateGiftCard);
routes.delete('/giftcards/id', productsController.delGiftCard);






routes.get('/pesquisa', productsController.pesquisaProdutos);

routes.get('/produtoInterno', productsController.produtoInterno);
routes.get('/minhasCompras', productsController.historicoDeCompras);



module.exports = routes; 


