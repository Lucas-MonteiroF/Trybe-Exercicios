let num = [4, 8, 4];

function sum(...num) {
    return num.reduce(((acc, val) => acc + val), 0);
}

console.log(sum(4, 8, 4));