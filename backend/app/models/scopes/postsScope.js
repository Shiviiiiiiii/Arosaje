
function Posts(models) {
    const {Users,Posts} = models;

    Posts.addScope('withUsers',{
        include: {
            model: Users,
            as: "user"
        }
    })
    return Posts
}


module.exports = Posts;
