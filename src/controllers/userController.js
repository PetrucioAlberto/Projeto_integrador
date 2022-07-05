var express = require('express');
const path = require('path');
const {
    validationResult
} = require('express-validator');
const fs = require('fs');
const db = require('../models/index')



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

    allUsers: (_, res) => {
        const usuarios = db.Usuario.findAll()
        usuarios.then(data => {
            console.log('data', data)
        }).catch(error => {
            console.log('error', error)

        })
        res.send('Usuarios')

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