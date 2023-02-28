const Joi = require('joi');
class OrdersValidation {

    creatValidation(body) {

        const schema = Joi.object({
            order_id : Joi.number().optional(),
            order_date : Joi.string().required(),
            item_id : Joi.number().required(),
            order_qyt : Joi.number().required(),
            order_price : Joi.number().required(),
            user_id : Joi.number().required()
        })

        return schema.validate(body)
    }

    updateValidation(body) {
        const schema = Joi.object({
            order_id : Joi.number().optional(),
            order_date : Joi.string().optional(),
            item_id : Joi.number().optional(),
            order_qyt : Joi.number().optional(),
            order_price : Joi.number().optional(),
            user_id : Joi.number().optional()
        })
        return schema.validate(body)
    }
}
module.exports = new OrdersValidation()