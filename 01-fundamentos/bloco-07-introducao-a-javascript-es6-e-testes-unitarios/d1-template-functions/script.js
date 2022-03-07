// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Parte 2

const fatorial = number => {
    let resultado = 1;

    for (let count = 2; count <= number; count += 1) {
        resultado *= count;
    }

    return resultado;
}

console.log(fatorial(4));

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Se a canoa não virar , olê, olê, olá"));