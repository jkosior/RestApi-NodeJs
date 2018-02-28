const express = require("express");
const db = require("./db");
const UserController = require("./Controllers/UserController");

const app = express();

/**
 * Endpoints
 */

app.use("/users", UserController);

module.exports = app;