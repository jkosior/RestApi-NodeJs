const fs = require("fs");
const loggers = {};

fs.readdirSync(__dirname)
    .filter( file => file !== "index.js" )
    .forEach( file => {
        loggers[file.replace(".js", '').toLowerCase()] = require(`./${file}`);
    });

module.exports = loggers;