const EventEmitter = require("events").EventEmitter;

/**
 * Preparation to send event to client
 */

const userCreated = new EventEmitter()
userCreated.on("info", function(user){
    console.log(`New user created ${user.name}`);
});

module.exports = userCreated;