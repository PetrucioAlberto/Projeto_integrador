const path = require('path');
const fs = require('fs');
const db = require('../models/index');
const {
    Acessorio,
    Fabricante,
    Plataforma,
    Jogo,
    GiftCard,

} = require('../models/index')
//logica de produtos

const productsController = {
    allAcessorios: async (req, res) => {
        try {
            const acessorios = await Acessorio.findAll({
                include: [{
                    model: Fabricante,
                    as: 'fabricante',
                    required: true
                }, ]
            });
            return res.send(acessorios)
        } catch (e) {
            console.log('e', e.message)
            return res.send('algo de errado não está certo')
        }
    },
    acessorioById: async (req, res) => {
        const {
            id
        } = req.params
        try {
            const acessorio = await Acessorio.findOne({

                include: [{
                    model: Fabricante,
                    as: 'fabricante',
                    required: true
                }, ],
                where: {
                    id: id
                }
            });
            return res.send(acessorio)
        } catch (e) {
            console.log('e', e.message)
            return res.send('algo de errado não está certo')
        }
    },
    addAcessorio: async (req, res) => {

        const data = req.body;
        try {
            await Acessorio.create({

                nome: data.nome,
                preco: data.preco,
                estoque: data.estoque,
                promocao: data.promocao,
                novo_usado: data.novo_usado,
                descricao: data.descricao,
                image: data.image,
                video_link: data.video_link

            })

            res.send('Usuário criado com sucesso')

        } catch (e) {
            console.log('e', e.message)

            return res.send('deu ruim')

        }

    },
    updateAcessorio: async (req, res) => {
        const data = req.body;
        const {
            id
        } = req.params;
        try {
            await Acessorio.update({
                nome: data.nome,
                preco: data.preco,
                estoque: data.estoque,
                promocao: data.promocao,
                novo_usado: data.novo_usado,
                descricao: data.descricao,
                image: data.image,
                video_link: data.video_link
            }, {
                where: {
                    id: id
                }
            })
            res.send('Dados atualizado com sucesso')
        } catch (e) {
            console.log('e', e.message)
            return res.send('Ih, qq foi agora?????!!!!!!')
        }
    },

    delAcessorio: async (req, res) => {
        const {
            id
        } = req.params;

        try {
            await Acessorio.destroy({
                where: {
                    id: id
                }
            })
            res.send('usuario deletado com sucesso')

        } catch (e) {
            console.log('e', e.message)
            return res.send('Ops, deu merda')
        }
    },


    allPlataforma: async (req, res) => {
        try {
            const plataforma = await Plataforma.findAll({
                include: [{
                    model: Fabricante,
                    as: 'fabricante',
                    required: true
                }, ]
            });
            return res.send(plataforma)
        } catch (e) {
            console.log('e', e.message)
            return res.send('algo de errado não está certo')
        }
    },
    plataformaById: async (req, res) => {
        const {
            id
        } = req.params
        try {
            const plataforma = await Plataforma.findOne({

                include: [{
                    model: Fabricante,
                    as: 'fabricante',
                    required: true
                },
             ],
                where: {
                    id: id
                }
            });
            return res.send(plataforma)
        } catch (e) {
            console.log('e', e.message)
            return res.send('algo de errado não está certo')
        }
    },
    addPlataforma: async (req, res) => {

        const data = req.body;
        try {
            await Plataforma.create({

                nome: data.nome,
                preco: data.preco,
                estoque: data.estoque,
                promocao: data.promocao,
                novo_usado: data.novo_usado,
                descricao: data.descricao,
                image: data.image,
                video_link: data.video_link

            })

            res.send('Usuário criado com sucesso')

        } catch (e) {
            console.log('e', e.message)

            return res.send('deu ruim')

        }

    },
    updatePlataforma: async (req, res) => {
        const data = req.body;
        const {
            id
        } = req.params;
        try {
            await plataforma.update({
                nome: data.nome,
                preco: data.preco,
                estoque: data.estoque,
                promocao: data.promocao,
                novo_usado: data.novo_usado,
                descricao: data.descricao,
                image: data.image,
                video_link: data.video_link
            }, {
                where: {
                    id: id
                }
            })
            res.send('Dados atualizado com sucesso')
        } catch (e) {
            console.log('e', e.message)
            return res.send('Ih, qq foi agora?????!!!!!!')
        }
    },

    delPlataforma: async (req, res) => {
        const {
            id
        } = req.params;

        try {
            await Plataforma.destroy({
                where: {
                    id: id
                }
            })
            res.send('usuario deletado com sucesso')

        } catch (e) {
            console.log('e', e.message)
            return res.send('Ops, deu merda')
        }
    },

    AllJogos: async (req, res) => {
        try {
            const jogo = await Jogo.findAll({
                include: [{
                    model: Fabricante,
                    as: 'fabricante',
                    required: true
                }, ]
            });
            return res.send(jogo)
        } catch (e) {
            console.log('e', e.message)
            return res.send('algo de errado não está certo')
        }
    },
    AllGiftCards: async (req, res) => {
        try {
            const giftCard = await GiftCard.findAll({
                include: [{
                    model: Fabricante,
                    as: 'fabricante',
                    required: true
                }, ]
            });
            return res.send(giftCard)

        } catch (e) {
            console.log('e', e.message)
            return res.send('algo de errado não está certo')
        }
    },



    pesquisaProdutos: (req, res, next) => {
        res.render('pesquisa')
    },

    produtoInterno: (req, res, next) => {
        res.render('produtoInterno');
    },
    historicoDeCompras: (req, res, next) => {
        res.render('historico');
    }
}

module.exports = productsController;