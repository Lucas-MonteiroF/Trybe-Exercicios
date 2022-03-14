const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten(array) {
  return console.log(array.reduce((item1, item2) => item1.concat(item2), []));
}
flatten(arrays);
