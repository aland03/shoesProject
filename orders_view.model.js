const knex = require("../connection")
const tableName = 'orders_view'
class Orders_viewModels {

    async getAllOrdersView () {
        return await knex(tableName).select('*').from(tableName)
    }

}

module.exports = new Orders_viewModels()