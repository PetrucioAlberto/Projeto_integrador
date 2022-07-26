const axios = require('axios');


const api = axios.create({

    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
    timeout: 4000,

    
});





module.exports = api;