const {Friends} = require("../models")

class FriendsService {

    constructor() {
        this.model = Friends

        this.findAllWhere = this.findAllWhere.bind(this)
        this.create = this.create.bind(this)
        this.findById = this.findById.bind(this)
        this.delete = this.delete.bind(this)
    }

    async findAllWhere(where) {
        return await this.model.findAll(where)
    }
    async findById(id) {
        return await this.model.findByPk(id)
    }
    async create(data) {
        return await this.model.create(data)
    }
    async delete(where){
        return await this.model.destroy(where)
    }
}
module.exports = FriendsService;