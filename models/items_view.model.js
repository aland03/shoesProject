const knex = require("../connection")
const tableName = 'items_view'
class Items_viewModels {

    async getAllItemsView () {
        return await knex(tableName).select('*').from(tableName)
    }

}

module.exports = new Items_viewModels()