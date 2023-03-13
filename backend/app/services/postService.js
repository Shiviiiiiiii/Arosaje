const {Posts} = require("../models")

class PostService {

    constructor() {
        this.model = Posts

        this.create = this.create.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findById = this.findById.bind(this)
        this.findWhere = this.findWhere.bind(this)
        this.update = this.update.bind(this)
    }

    async create(data) {
        return this.model.scope("withUsers").create(data);
    }
    async findAll() {
        return await this.model.scope("withUsers").findAll()
    }
    async findById(id) {
        return await this.model.scope("withUsers").findByPk(id)
    }
    async findWhere(where) {
        return await this.model.scope("withUsers").findAll({where})
    }
    async delete(where) {
        return await this.model.destroy(where)
    }
    async update(id) {
        return await this.model.update(id)
    }
}

module.exports = PostService;