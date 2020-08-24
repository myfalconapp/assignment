const Joi = require("joi");
exports.parse_schema = {
    body: Joi.object({
        data: Joi.string().required()
    })
}