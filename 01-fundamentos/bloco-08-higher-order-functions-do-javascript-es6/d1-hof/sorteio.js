const bet = (myNumber, luckyNumber) => myNumber === luckyNumber;

const sorteio = (myNumber, callback) => {
    let luckyNumber = Math.floor((Math.random() * 5) + 1);
    console.log(`O número sorteado foi: ${luckyNumber}`);
    return callback(myNumber, luckyNumber) ? 'Parabéns, pena que é de mentira!!!' : 'Ah que pena seria.' ;
};

console.log(sorteio(3, bet));
