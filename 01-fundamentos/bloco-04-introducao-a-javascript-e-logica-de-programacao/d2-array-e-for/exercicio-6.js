let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
let par = 0;


for (let count = 0; count < numbers.length; count++) {

    if (numbers[count] % 2 !== 0) {

        impar += 1 


        console.log('Impar');
    
    } else {

        par += 1
        console.log('Par');
    }

}

console.log(impar + ' numeros ímpares e ' + par + ' numeros pares');
