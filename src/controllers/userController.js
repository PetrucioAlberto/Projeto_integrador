var express = require('express');
const path = require('path');
const {
    validationResult
} = require('express-validator');
const fs = require('fs');
// const db = require('../models/index')
const {
    Usuario
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

    allUsers: async (_, res) => {
        try {
            const usuarios = await Usuario.findAll()
            return res.send(usuarios)
        } catch (e) {
            console.log('e', e.message)
            return res.render('404-page')

        }
    },
    //create user
    addUser: async (req, res) => {

        const data = req.body;
        try {
            await Usuario.create({
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
                enderecos_res_id: data.enderecos_res_id,
                enderecos_ens_id: data.enderecos_ens_id,
                formas_pgtos_id: data.formas_pgtos_id,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            })
            res.send('Usuário criado com sucesso')

        } catch (e) {

            return res.send('deu merda')

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
                enderecos_res_id: data.enderecos_res_id,
                enderecos_ens_id: data.enderecos_ens_id,
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
            return res.send('Ih, qq foi agora!!!!!!')
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