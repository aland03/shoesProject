const knex = require("../connection")
const tableName = 'orders'
class OrdersModels {

    async getAllOrders () {
        return await knex.select('*').from(tableName)
    }

    async getByIdOrders (order_id) {
        return await knex(tableName).select('*').where('order_id', order_id)
    }

    async addNewOrders (body) {
        return await knex(tableName).insert(body)
    }

    async deleteOrders (order_id) {
        return await knex(tableName).where('order_id', order_id).del()
    }

    async updateOrders (order_id, body) {
        return await knex(tableName).where('order_id', order_id).update(body)
    }

}

module.exports = new OrdersModels()