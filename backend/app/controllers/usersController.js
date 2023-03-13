const UsersService = require("../services/usersService")
const {validationResult} = require("express-validator");
const bcrypt = require("bcrypt");

class UsersController {
    constructor() {
        this.usersService = new UsersService()

        this.get = this.get.bind(this)
        this.getId = this.getId.bind(this)
        this.getEmail = this.getEmail.bind(this)
        this.add = this.add.bind(this)
        this.update = this.update.bind(this)
        this.login = this.login.bind(this)
    }


    async get(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})

            return this.usersService.findAll()
                .then(data => res.status(200).send(data))
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }

    async getId(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})

            return this.usersService.findById(req.params.id).then(data => res.status(200).send(data));
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }

    async getEmail(req, res) {
        try {
            const {email} = req.body;
            return this.usersService.findOne({where: {email}})
                .then(data => res.status(200).send(data))
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }

    }

    async login(req, res) {
        try {
            /* const errors = validationResult(req)
             if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})
 */
            const {email, password} = req.body;

            const user = await this.usersService.findOne({where: {email}})
            const userWithoutPassword = await this.usersService.findWhere({where: {email}})
            if (!user && !userWithoutPassword) return res.status(404).send({message: "Mot de passe/Addresse mail incorrect"})

            const checkPWD = bcrypt.compareSync(password, user.password, (err, result) => {
                return result;
            });
            if (!checkPWD) return res.status(401).send({message: "Mot de passe/Addresse mail incorrect"})

            return res.status(200).send(userWithoutPassword)
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }

    async update(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})

            const {password, oldPassword} = req.body;
            const {id} = req.params

            const user = await this.usersService.findOne({where: {id}})
            if (!user) return res.status(404).send({message: "Utilisateur non trouvé"})

            if(password && oldPassword) {
                const checkPWD = bcrypt.compareSync(oldPassword, user.password, (err, result)=> {
                    return result;
                });
                if (!checkPWD) return res.status(401).send({message: "Mot de passe incorrect"})
                else {
                    const salt = bcrypt.genSaltSync();
                    req.body.password = bcrypt.hashSync(password, salt);
                }
            }

            const updatedUser = await this.usersService.update(req.body,{where: {id}})
            if(updatedUser[0] === 1) return await this.usersService.findById(id).then(data => res.status(200).send(data));
            else return res.status(500).send({message: "erreur serveur"})

        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }

    async add(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).send({message: 'Missing or wrong values'})
            const {email} = req.body;

            if (await this.usersService.findOne({where: {email}}))
                return res.status(406).send({message: "l'email existe déja"});

            return this.usersService.create(req.body).then(user => res.status(200).send(user))
        } catch (e) {
            return res.status(500).send({message: "erreur serveur"})
        }
    }
}

module.exports = UsersController;