const Joi = require('joi');
class BrandsValidation {

    creatValidation(body) {

        const schema = Joi.object({
            brand_id : Joi.number().optional(),
            brand_name : Joi.string().required()
        })

        return schema.validate(body)
    }

    updateValidation(body) {
        const schema = Joi.object({
            brand_id : Joi.number().optional(),
            brand_name : Joi.string().optional()
        })
        return schema.validate(body)
    }
}
module.exports = new BrandsValidation()