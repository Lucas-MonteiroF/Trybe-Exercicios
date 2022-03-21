const myList = [1, 2, 3, 4, 5, 6];

const swap = ([...list]) => [list[list.length - 1], list[list.length / 2], list[0]];

console.log(swap(myList));