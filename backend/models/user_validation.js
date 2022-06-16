const Joi = require('joi');
const { default: mongoose } = require('mongoose');

/*
JOI schema for email and password
password require minimun 8 characters 1 uppercase Alphabet and maximun 30 charcaters
*/
const schema = Joi.object({
    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .uppercase(1)
        .min(8)
        .max(30)
        .required()
});

module.exports = schema;