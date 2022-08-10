const auth = (req, res, next) => {
    console.log('AAAAAAAAAA', req.session.usuario)
    if (req.session.usuario == !'undefined') {
        next()
    } else {
        return res.send('É necessário estar logado para acessar essa página')
    }
}


module.exports = auth;