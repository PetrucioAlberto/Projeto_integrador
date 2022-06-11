const fs = require('fs');


const logSite = (req, res, next) => {
    fs.appendFileSync('log', `${req.method} ${req.url}  ${new Date()}\n`);
    next();
};






module.exports = logSite;