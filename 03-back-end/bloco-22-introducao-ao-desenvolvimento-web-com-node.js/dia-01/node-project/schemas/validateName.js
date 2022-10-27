const joi = require('joi');

const nameSchema = joi.object({
    name: joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required,
})

const validateName = (name) => {
    nameSchema.validate(name)
    if(validateName.error) {
        console.log(validateName.error.details[0].message);
    }
}

module.exports = {
    validateName
}