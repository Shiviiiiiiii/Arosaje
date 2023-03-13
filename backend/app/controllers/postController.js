const PostService = require("../services/postService")
const FriendsService = require("../services/friendsService");
const {validationResult} = require("express-validator");
const { Op } = require("sequelize");



class PostController {
    constructor() {
        this.postsService = new PostService()
        this.friendsService = new FriendsService()
        this.add = this.add.bind(this)
        this.get = this.get.bind(this)
        this.getId = this.getId.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)

    }
    async add(req, res) {

        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})

            const created = await this.postsService.create(req.body)

            const post = await this.postsService.findById(created.id)

            return res.status(200).send(post)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: "erreur serveur"})
        }
    }
    async get(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})
            const friends = await this.friendsService.findAllWhere({where: {userId: req.query.auth}})
            const myFriends = await this.postsService.findWhere({
                userId:{
                        [Op.in]: [...friends.map(friends => friends.friendId),req.query.auth],
            }
            })

            return res.status(200).send(myFriends)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: "erreur serveur"})
        }
    }

    async getId(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})

            const {userId} = req.params

            return this.postsService.findWhere({userId}).then(data => res.status(200).send(data));
        }catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }
    async update(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})

            const {id} = req.params

            return this.postsService.update(req.body, {
                where: {id}
            }).then(([user]) => {
                if (user === 1) return this.postsService.findById(id).then(data => res.status(200).send(data));
                else return res.status(204).send({message: `Aucune valeur modifier pour l'id : ${id}`});
            }).catch(err => {
                return res.status(404).send({
                    message: "Erreur avec l'id = " + id,
                    err
                });
            });
        }catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }
    async delete(req,res){
        try {
            await this.postsService.delete({where: {id: req.params.id}})
            return res.status(200).send({id: req.params.id})
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }
}

module.exports = PostController