const mongoose = require("mongoose");
const config = require("./config");

const cdb = config.database;

const URI = `mongodb://${cdb.username}:${cdb.password}@ds249128.mlab.com:49128/myfirstdata`;

mongoose.connect(URI);