const Joi = require('joi');
class ItemsValidation {

    creatValidation(body) {

        const schema = Joi.object({
            item_id : Joi.number().optional(),
            item_name : Joi.string().required(),
            item_barcode : Joi.number().required(),
            item_imge_url : Joi.string().required(),
            brand_id : Joi.number().required(),
            item_available_qyt : Joi.number().required()
        })

        return schema.validate(body)
    }

    updateValidation(body) {
        const schema = Joi.object({
            item_id : Joi.number().optional(),
            item_name : Joi.string().optional(),
            item_barcode : Joi.number().optional(),
            item_imge_url : Joi.string().optional(),
            brand_id : Joi.number().optional(),
            item_available_qyt : Joi.number().optional()
        })
        return schema.validate(body)
    }
}
module.exports = new ItemsValidation()