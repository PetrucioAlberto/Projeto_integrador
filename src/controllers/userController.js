var express = require('express');
const path = require('path');
const api = require('../controllers/apiController');

const {
    validationResult
} = require('express-validator');
const fs = require('fs');
// const db = require('../models/index')
const {
    Usuario,
    FormasPgto

} = require('../models/index')

//logica  usuários

const userController = {
    login: (req, res, next) => {
        res.render('cadastroLogin');
    },

    formUser: (req, res, next) => {
        res.render('cadastroUser');
    },
    salvarCadastro: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())[
            console.log(errors)
        ]
    },
    sucessoUser: (req, res, ) => {
        res.render('sucesso');
    },

    //CRUD USUÁRIOS
    allUsers: async (_, res) => {
        try {
            const usuarios = await Usuario.findAll({
                include: [{
                    model: FormasPgto,
                    as: 'forma_pgto',
                    required: true
                }]
            });
            return res.json({

                totalUsers: usuarios.length,
                data: usuarios
            })

        } catch (e) {
            console.log('e', e.message)
            return res.render('404-page')
        }
    },
    //show user by id
    userById: async (req, res) => {
        const {
            id,
        } = req.params;
        try {
            const usuario = await Usuario.findOne({
                include: [{
                    model: FormasPgto,
                    as: 'forma_pgto',
                    required: true
                }],
                where: {
                    id: id,
                }
            })
            return res.json({        
                      
                Email: usuario.email,
                CPF: usuario.cpf,
                Data: usuario
            })
        } catch (e) {
            console.log('e', e.message)
            return res.send('Ops, deu merda')
        }
    },
    //create user
    addUser: async (req, res) => {
        const data = req.body;
        try {
            await Usuario.create({
                name: data.name,
                surname: data.surname,
                password: data.password,
                birthday: data.birthday,
                gender: data.gender,
                cpf: data.cpf,
                rg: data.rg,
                cel_whats: data.cel_whats,
                tel: data.tel,
                email: data.email,
                cep_res: data.cep_res,
                endereco_res: data.endereco_res,
                numero_res: data.numero_res,
                bairro_res: data.bairro_res,
                referencia_res: data.referencia_res,
                cidade_res: data.cidade_res,
                estado_res: data.estado_res,
                pais_res: data.pais_res,
                cep_ent: data.cep_ent,
                endereco_ent: data.endereco_ent,
                numero_ent: data.numero_ent,
                bairro_ent: data.bairro_ent,
                referencia_ent: data.referencia_ent,
                cidade_ent: data.cidade_ent,
                estado_ent: data.estado_ent,
                pais_ent: data.pais_ent,
                formas_pgtos_id: data.formas_pgtos_id,
            })
            res.send('Usuário criado com sucesso')
        } catch (e) {
            return res.send('Ai meu deus')
        }

    },
    //delete user
    delUser: async (req, res) => {
        const {
            id
        } = req.params;
        try {
            await Usuario.destroy({
                where: {
                    id: id
                }
            })
            res.send('usuario deletado com sucesso')
        } catch (e) {
            return res.send('Ops, deu merda')
        }
    },
    //update user
    updateUser: async (req, res) => {
        const data = req.body;
        const {
            id
        } = req.params;
        try {
            await Usuario.update({
                id: data.id,
                name: data.name,
                surname: data.surname,
                password: data.password,
                birthday: data.birthday,
                gender: data.gender,
                cpf: data.cpf,
                rg: data.rg,
                cel_whats: data.cel_whats,
                tel: data.tel,
                email: data.email,

                formas_pgtos_id: data.formas_pgtos_id,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            }, {
                where: {
                    id: id
                }
            })
            res.send('Dados atualizado com sucesso')
        } catch (e) {
            return res.send('Ih, qq foi agora?????!!!!!!')
        }
    },

    payment: async (_, res) => {
        try {
            const pays = await FormasPgto.findAll()
            return res.send(pays)
        } catch (e) {
            console.log('e', e.message)
            return res.render('404-page')
        }
    },

    userFilter: (req, res, next) => {
        const id = req.params.id
        const nome = req.params.nome
        res.send(userCriado.find((user) => user.id == id || user.nome == nome));

    },

    infocadastro: (req, res, next) => {
        res.render('infoUsuario')
    },
}


module.exports = userController;