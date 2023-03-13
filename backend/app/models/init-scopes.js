const _Users = require("./scopes/usersScope")
const _Posts = require("./scopes/postsScope")
const _Friends = require("./scopes/friendsScope")


function initScopes(models) {

    _Users(models)
    _Posts(models)
    _Friends(models)


    return models
}

module.exports = initScopes;
