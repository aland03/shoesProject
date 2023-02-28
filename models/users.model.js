const knex = require("../connection")
const tableName = 'users'
class UsersModels {

    async getAllUsers () {
        return await knex(tableName).select('*').from(tableName)
    }

    async getByIdUsers (user_id) {
        return await knex(tableName).select('*').where('user_id', user_id)
    }

    async addNewUsers (body) {
        return await knex(tableName).insert(body)
    }

    async deleteUsers (user_id) {
        return await knex(tableName).where('user_id', user_id).del()
    }

    async updateUsers (user_id, body) {
        return await knex(tableName).where('user_id', user_id).update(body)
    }

}

module.exports = new UsersModels()