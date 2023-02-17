const knex = require("../connection")
const tableName = 'items'

class ItemsModels {

    async getAllItems () {
        return await knex(tableName).select('*').from(tableName)
    }

    async getByIdItems (item_id) {
        return await knex(tableName).select('*').where('item_id', item_id)
    }

    async addNewItems (body) {
        return await knex(tableName).insert(body)
    }

    async deleteItems (item_id) {
        return await knex(tableName).where('item_id', item_id).del()
    }

    async updateItems (item_id, body) {
        return await knex(tableName).where('item_id', item_id).update(body)
    }

}

module.exports = new ItemsModels()