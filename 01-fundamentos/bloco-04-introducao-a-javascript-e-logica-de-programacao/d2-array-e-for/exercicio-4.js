let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;


for (let count = 0; count < numbers.length; count++) {

    resultado += numbers[count];

    
}

resultado = resultado / numbers.length;

if (resultado > 20) {

    console.log('Maior que 20');

} else {

    console.log('menor que 20');

}

console.log(resultado);