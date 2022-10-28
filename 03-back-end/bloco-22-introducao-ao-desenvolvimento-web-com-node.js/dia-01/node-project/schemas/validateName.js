const joi = require('joi');

const nameSchema = joi.object({
    name: joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
})

const validateName = async (name) => {
    const validation = nameSchema.validate(name);

    if(validation.error) {
       return console.log(validation.error.message);
    }
return console.log(`Olá ${Object.values(name)[0]}, seja bem vindo(a)`);
}

module.exports = {
    validateName
}