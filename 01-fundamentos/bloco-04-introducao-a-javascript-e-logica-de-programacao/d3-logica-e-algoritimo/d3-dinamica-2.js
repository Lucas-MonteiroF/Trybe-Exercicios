let dividePor3 = 0;

for (let count = 2; count <= 150; count +=1) {

    if (count % 3 === 0) {

        dividePor3 += 1;
    }   
}

if (dividePor3 === 50) {
console.log('50 numeros são divisíveis por 3 no intervalo e 2 a 150');
} else {
    console.log(dividePor3 + ' numeros são divisíveis por 3 no intervalo de 2 a 150');
}

