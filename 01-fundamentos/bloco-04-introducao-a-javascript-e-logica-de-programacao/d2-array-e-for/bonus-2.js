let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let count = 1; count < numbers.length; count += 1) {
  for (let count2 = 0; count2 < count; count2 += 1) {
    if (numbers[count] > numbers[count2]) {
      let posicao = numbers[count];
      numbers[count] = numbers[count2];
      numbers[count2] = posicao;
    }
  }
}

console.log(numbers);