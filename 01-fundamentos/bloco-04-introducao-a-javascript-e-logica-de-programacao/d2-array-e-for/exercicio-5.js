let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];


for (let count = 0; count < numbers.length; count++) {

    if (numbers[count] > maiorNumero ) {

        maiorNumero = numbers[count];
    }

}

console.log(maiorNumero);
