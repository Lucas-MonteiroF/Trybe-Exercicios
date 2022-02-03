let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];


for (let count = 0; count < numbers.length; count++) {

    if (numbers[count] < menorNumero ) {

        menorNumero = numbers[count];
    }

}

console.log(menorNumero);