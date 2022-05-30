const Joi = require('joi');
const { default: mongoose } = require('mongoose');

const schema = Joi.object({
    email: Joi.string()
    .email ()
    .required(),

    password: Joi.string()    
    .uppercase(1)
    .min(8)
    .max(30)
    .required()
});

module.exports = schema;