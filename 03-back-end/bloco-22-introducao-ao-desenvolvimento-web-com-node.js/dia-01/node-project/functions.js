const readline = require('readline-sync');
const { validateName } = require('./schemas/validateName')

const getInput = () => {
    let name = readline.question('Como se chama? ');
    validateName({ name });
}

module.exports = {
    getInput
}