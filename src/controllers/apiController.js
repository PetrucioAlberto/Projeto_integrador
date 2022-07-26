const path = require('path');
const fs = require('fs');
const api = require('../../configAxios/api');

const apiController = {

    getCountries: (req, res, ) => {
        api.get('/paises?orderBy=nome')
            .then(response => {


                const countries = response.data

                return res.render('cadastroUser', {
                    countries: countries
                })
            })
            .catch(err => {
                console.log(err)
            })

    },
    // getStates:  (req, res, ) => {

    //     api.get('/estados?orderBy=nome')
    //         .then(statesReturned => {

    //             const states = statesReturned.data

    //             return res.render('cadastroUser',  {states: states})
    //         })

    //         .catch (err => {
    //             console.log(err)
    //         })

    // }



}


module.exports = apiController