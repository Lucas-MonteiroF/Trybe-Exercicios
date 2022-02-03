let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let count = 0; count < numbers.length; count ++) {
  if (count + 1 < numbers.length) {
    novoArray.push(numbers[count] * numbers[count + 1]);
  } else {
    novoArray.push(numbers[count] * 2);
  }
}

console.log(novoArray);