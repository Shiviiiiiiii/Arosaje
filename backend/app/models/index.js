'use strict';

const db = require("../database/config");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(db.database, db.username, db.password, db)

const initModels = require("./init-models");
const initScopes = require("./init-scopes");

const models = initModels(sequelize)

module.exports = initScopes(models);