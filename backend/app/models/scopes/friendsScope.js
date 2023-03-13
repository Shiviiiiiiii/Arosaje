function Friends(models) {
    const {Friends, Users} = models;

    Friends.addScope('defaultScope', {
        include: {
            model: Users,
            as: "friend"
        }
    })

    return Friends
}


module.exports = Friends;
