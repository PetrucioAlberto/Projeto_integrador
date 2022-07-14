const axios = require('axios');


const api = axios.create({

    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades"
    
});





module.exports = api;