var express = require('express');
let {check, validationResult, body} = require('express-validator');


const validators = [
    check('nome').notEmpty().withMessage('O nome é obrigatório'),
    check('email').notEmpty().isEmail().withMessage('Um email válido é necessário'),
    check('nome'),
    check('sobrenome'),
    check('genero'),
    check('dataNascimento'),
    check('CPF'),
    check('RG'),
    check('telefone'),
    check('celular'),
    check('username'),
    check('username2'),
    check('senha'),
    check('repitasenha')
]




module.exports = validators;  