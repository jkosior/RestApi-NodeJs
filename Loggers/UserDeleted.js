const EventEmitter = require("events").EventEmitter;

/**
 * Preparation to send event to client
 */

const userDeleted = new EventEmitter()
userDeleted.on("info", function (user) {
    console.log(`User deleted ${user.name}`);
});

module.exports = userDeleted ;