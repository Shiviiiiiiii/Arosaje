const bcrypt = require("bcrypt");

function Users(models) {
    const {Users, Posts, Friends} = models;

    Users.addScope('withPost', {
        include: {
            model: Posts,
            as: "posts",
        },
    })

    Users.addScope('withFriend', {
        include: {
            model: Friends,
            as: "friends",
        },
    })

    Users.addScope('withoutPassword', {
        attributes: {exclude: ['password']}
    })

    Users.addHook('beforeCreate', 'hashPassword', async (data) => {
        const salt = bcrypt.genSaltSync();
        if (data.password) data.password = bcrypt.hashSync(data.password, salt);
        return data
    })

    Users.addHook('beforeUpdate', 'hashPassword', async (data) => {
        const salt = bcrypt.genSaltSync();
        if (data.password) data.password = bcrypt.hashSync(data.password, salt);
        return data
    })
    return Users
}


module.exports = Users;
