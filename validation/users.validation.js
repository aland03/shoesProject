const Joi = require('joi');
class UsersValidation {

    creatValidation(body) {
        const schema = Joi.object({
            user_id : Joi.number().optional(),
            user_name : Joi.string().optional()
        })
        return schema.validate(body)
    }

    updateValidation(body) {
        const schema = Joi.object({
            user_id : Joi.number().optional(),
            user_name : Joi.string().optional()
        })
        return schema.validate(body)
    }
}
module.exports = new UsersValidation()