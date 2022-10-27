const readline = require('readline-sync');
const validation = require('./schemas/validateName')

const getInput = () => {
    let name = readline.question('Como se chama? ');
    validation(name);
    console.log(name);
}

module.exports = {
    getInput
}