const DataTypes = require("sequelize").DataTypes;

const _Users = require("./users")
const _Posts = require("./posts")
const _Friends = require("./friends")

function initModels(sequelize) {
    const Users = _Users(sequelize,DataTypes)
    const Posts = _Posts(sequelize,DataTypes)
    const Friends = _Friends(sequelize, DataTypes)

    Users.hasMany(Posts,{as: "posts", foreignKey: "userId"});
    Posts.belongsTo(Users,{as: "user", foreignKey: "userId"});

    Users.hasMany(Friends,{as: "friends", foreignKey: "userId"});
    Friends.belongsTo(Users, {as:"user", foreignKey: "userId"});

    Users.hasMany(Friends,{as: "users", foreignKey: "friendId"});
    Friends.belongsTo(Users, {as:"friend", foreignKey: "friendId"});

    return {
        Users,
        Posts,
        Friends,
    }
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
