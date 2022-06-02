const fs = require('fs');


const logSite = (req, res, next) => {
    fs.appendFileSync('log.txt', `${req.method} ${req.url}  ${new Date()}\n`);
    next();
};






module.exports = logSite;