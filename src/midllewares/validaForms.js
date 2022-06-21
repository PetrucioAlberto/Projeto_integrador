var express = require('express');
let {body, validationResult} = require('express-validator');


const validators = [
    body('nome').isString().isEmpty().withMessage('O nome é obrigatório'),
    body('sobrenome').isString().isEmpty().withMessage('O sobrenome é obrigatório'),
    body('genero').isEmpty().withMessage('Por favor, completar o campo'),
    body('dataNascimento').isEmpty().withMessage('Data de nascimento é obrigatório'),
    body('CPF').isEmpty().withMessage('O nome é obrigatório'),
    body('RG').isEmpty().withMessage('O nome é obrigatório'),
    body('telefone').isEmpty().withMessage('O nome é obrigatório'),
    body('celular').isEmpty().withMessage('O nome é obrigatório'),
    body('username').isEmail().isEmpty().withMessage('Email inválido'),
    body('username2').isEmail().isEmpty().withMessage('Email inválido'),
    body('senha').isLength({min: 6}).isEmpty().withMessage('Insira sua senha'),
    body('repitasenha').isEmpty().withMessage('O nome é obrigatório')    
    
]



module.exports = validators;