const {Users} = require("../models")

class UsersService {

    constructor() {
        this.model = Users

        this.findAll = this.findAll.bind(this)
        this.findOne = this.findOne.bind(this)
        this.findWhere = this.findWhere.bind(this)
        this.create = this.create.bind(this)
        this.findById = this.findById.bind(this)
        this.update = this.update.bind(this)
    }

    async findAll(where) {
        return await this.model.scope('withoutPassword').findAll(where)
    }
    async findOne(where) {
        return await this.model.findOne(where)
    }
    async findWhere(where) {
        return await this.model.scope(['withPost', 'withFriend','withoutPassword']).findOne(where)
    }
    async findById(id) {
        return await this.model.scope(['withPost', 'withFriend','withoutPassword']).findByPk(id)
    }
    async create(data) {
        return await this.model.create(data)
    }
    async update(data,where) {
        return this.model.scope('withoutPassword').update(data, where);
    }
}
module.exports = UsersService;