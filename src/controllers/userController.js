var express = require('express');
const path = require('path');
const api = require('../controllers/apiController');
const bcrypt = require('bcryptjs');


const session = require('express-session');

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
    infocadastro: (req, res, next) => {
        res.render('infoUsuario')
    },

    //CRUD USUÁRIOS
    allUsers: async (_, res) => {
        try {
            const usuarios = await Usuario.findAll({
                

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
            id
        } = req.params;
        try {
            const usuario = await Usuario.findOne({
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
            return res.send('Usuário não existe')
        }
    },
    userByEmail: async (req, res) => {
        // const {
        //     email
        // } = req.body;
        try {
            const usuario = await Usuario.findOne({
                where: {
                    email: email,
                }
            })

            res.json({
                id: usuario.id,
                Email: usuario.email,
                senha: usuario.password,
            })

            if (usuario.usuario && usuario.password) {
                return res.redirect('/login')
            }
        } catch (e) {
            console.log('e', e.message)
            return res.send('Usuário não cadastrado')
        }
    },

    //create user

    addUser: async (req, res) => {

        const data = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        try {


            await Usuario.create({
                ...data
            })
            return res.redirect('/usuarios/login')


        } catch (e) {
            console.log('e', e.message, req.body)

            return res.render('cadastroUser', {
                error: e.message
            })

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
        const data = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        const {
            id
        } = req.params;
        try {
            await Usuario.update({
                id: data.id,
                name: data.name,
                surname: data.surname,
                password: data.password,
                gender: data.gender,
                cpf: data.cpf,
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
    logarUsuario: async (req, res) => {
        const {
            email,
            password,
            logado
        } = req.body;

        try {
            const usuario = await Usuario.findOne({

                attributes: ['email', 'password', 'name', 'surname'],


            }, {
                where: {
                    email: email
                }
            })



            console.log(usuario)
            if (email == usuario.email && password == usuario.password) {
                req.session.usuario = usuario
                return res.render('carrinhoDeCompras')
            } else {

            }
            res.send('Usuário não cadastrado')
            if (logado != undefined) {

                res.cookies('logado', usuario, {
                    maxAge: 600000
                })
            }

        } catch (e) {
            // console.log('e', e.message)
        }



    },





}


module.exports = userController;