var express = require('express');
let {
    body,
    check
} = require('express-validator');     
                
const Uservalidator = [
    body('name')
    .notEmpty()
    .withMessage('O nome é obrigatório').bail()
    .isLength([{
        min: 2,
        max: 25
    }]).withMessage('o nome deve ter entre 2 e 25 caracteres').bail()
    .toLowerCase()    
    .trim(),

    body('email')
    .notEmpty()
    .withMessage('O nome é obrigatório').bail()
    .isEmail()
    .withMessage('Um email válido é necessário').bail()
    .normalizeEmail()
    .isLength([{
        max: 30
    }])
    .toLowerCase()
    .trim(),

    body('username1') //email2
    .notEmpty().bail()
    .isEmail()
    .withMessage('Um email válido é necessário')
    .normalizeEmail()
    .isLength([{
        max: 30
    }])
    .trim(),

    body('surname')
    .notEmpty().bail()
    .withMessage('O sobrenome é obrigatório')
    .isLength([{
        min: 2,
        max: 25
    }]).withMessage('o nome deve ter entre 2 e 25 caracteres').bail()
    .toLowerCase()
    .trim(),

    body('gender')
    .notEmpty().bail()
    .withMessage('O Gênero é obrigatório'),

    body('cpf')
    .notEmpty().bail()
    .withMessage('O CPF é obrigatório'),

    body('tel'),
    

    body('cel_whats')
    .notEmpty().bail()
    .withMessage('O Telefone é obrigatório'),
    
    body('password')
    .notEmpty().bail()
    .withMessage('Uma senha é obrigatória'),

    ////////////////////////  endereços /////////////////////////////////
    body('cep_res')
    .notEmpty().bail()
    .withMessage('O CEP é obrigatório'),

    body('cep_ent')
    .notEmpty().bail()
    .withMessage('O CEP de entrega é obrigatório'),

    body('endereco_res')
    .notEmpty().bail()
    .withMessage('O endereco é obrigatório'),

    body('endereco_ent')
    .notEmpty().bail()
    .withMessage('O endereco de entrega é obrigatório'),

    body('numero_res')
    .notEmpty().bail()
    .withMessage('O número é obrigatório')
    .isNumeric()
    .trim(),

    body('numero_ent')
    .notEmpty().bail()
    .withMessage('O numero de entrega é obrigatório')
    .isNumeric()
    .trim(),
    

    body('bairro_res')
    .notEmpty().bail()
    .withMessage('O bairro é obrigatório'),

    body('bairro_ent')
    .notEmpty().bail()
    .withMessage('O bairro entrega é obrigatório'),

    body('cidade_res')
    .notEmpty().bail()
    .withMessage('A cidade é obrigatório'),

    body('cidade_ent')
    .notEmpty().bail()
    .withMessage('A cidade de entrega é obrigatório'),

    body('estado_res')
    .notEmpty().bail()
    .withMessage('O Estado é obrigatório'),

    body('estado_ent')
    .notEmpty().bail()
    .withMessage('O Estado de entrega é obrigatório')
    .trim(),

    body('complemento_res')
    .toLowerCase()
    .trim(),

    body('complemento_ent')
    .toLowerCase()
    .trim(),

    body('referencia_res')
    .toLowerCase()
    .trim(),

    body('referencia_ent')
    .toLowerCase()
    .trim(),

    body('pais_res')
    .notEmpty().bail()
    .withMessage('O país é obrigatório')
    .trim(),

    body('pais_ent')
    .notEmpty().bail()
    .withMessage('O páis de entrega é obrigatório')
    .trim(),

]

module.exports = Uservalidator;