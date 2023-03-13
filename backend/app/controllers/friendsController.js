const UsersService = require("../services/usersService")
const FriendsService = require("../services/friendsService")
const {validationResult} = require("express-validator");


class FriendsController {
    constructor() {
        this.friendsService = new FriendsService()
        this.usersService = new UsersService()
        this.get = this.get.bind(this)
        this.getId = this.getId.bind(this)
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)
        this.deleteFriend = this.deleteFriend.bind(this)
    }


    async get(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})
            const friends = await this.friendsService.findAllWhere({where: {userId: req.params.userId}})
            return res.status(200).send(friends)
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }


    async getId(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})

            const user = () => {
                this.friendsService.findById(req.params.userId)
               return this.usersService.findById(req.query.id)
            }

            return res.status(200).send({user});
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }

    async add(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})

            return this.friendsService.create(req.body).then(user => res.status(200).send(user))
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }
    async delete(req, res) {
        try {
            await this.friendsService.delete({where: {id: req.params.id}})
            return res.status(200).send({id: req.params.id})
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }
    async deleteFriend(req,res) {
        try {
            await this.friendsService.delete({where: {friendId: req.body.friendId, userId: req.body.userId }})
            return res.status(200).send({message: "delete success"})
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: "erreur serveur"})
        }
    }
}
module.exports = FriendsController;