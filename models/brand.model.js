const knex = require("../connection")
const tableName = 'brand'

class BrandModels {

    async getAllBrand () {
        return await knex(tableName).select('*').from(tableName)
    }

    async getByIdBrand (brand_id) {
        return await knex(tableName).select('*').where('brand_id', brand_id)
    }

    async addNewBrand (body) {
        return await knex(tableName).insert(body)
    }

    async deleteBrand (brand_id) {
        return await knex(tableName).where('brand_id', brand_id).del()
    }

    async updateBrand (brand_id, body) {
        return await knex(tableName).where('brand_id', brand_id).update(body)
    }
}

module.exports = new BrandModels()