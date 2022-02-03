let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let count = 0; count < numbers.length; count++) {

    soma += numbers[count];
}

let media = soma / numbers.length;

console.log(media);