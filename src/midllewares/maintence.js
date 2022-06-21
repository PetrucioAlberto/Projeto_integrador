const express = require('express');
const app = express();
let maintence = false;


app.use((req, res, next) => {
    if (!maintence) {
        res.render('manutencao')
    } 
next()
})


module.exports = maintence