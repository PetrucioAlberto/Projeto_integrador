const path = require('path');
const fs = require('fs');
const userCriado = require('./dataUser/user');





//logica de usuários

const userController = {
    login: (req, res, next) => {
        res.render('cadastroLogin');       
    },
    formUser: (req, res, next) => {
        res.render('cadastroUser');                
    }, 
    criarUsuario: (req, res, next) => {
        let usuario = req.body;
        console.log(usuario);n
        res.send("Usuario criado com sucesso" + usuario);
        res.redirect('/login/sucesso');   
    },
    sucessoUser: (req, res, ) => {
        res.render('sucesso');
    },

    dataUsers: (req, res, next) => {
        res.send(userCriado);
    },
    userFilter: (req, res, next) => {
        const id = req.params.id
        const nome = req.params.nome
        res.send(userCriado.find((user) => user.id == id || user.nome == nome));
        
    },
        
    infocadastro: (req, res, next) => {
        res.render('infoUsuario')
    }
    
}


module.exports = userController;