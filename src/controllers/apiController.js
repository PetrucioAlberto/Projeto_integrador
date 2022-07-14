const path = require('path');
const fs = require('fs');
const api = require('../../configAxios/api');

const apiController = {
    getStates: async (req, res, ) => {
        api.get('/estados')
            .then(statesReturned => {
                const states = statesReturned.data
                res.render('cadastroUser', { states: states})
            })

    }


}


module.exports = apiController