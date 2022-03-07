// sum.js
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

module.exports = sum;

// myRemove.js
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
module.exports = myRemove;

// myFizzBuzz.js
function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

module.exports = myFizzBuzz;

// encodeDecode.js
function mapString(objectMap, string) {
  const splitString = string.split("");
  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];

    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join("");
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

function decode(string) {
  const map = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  return mapString(map, string);
}

const functions = { encode, decode };
module.exports = functions;

// techList.js
const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return "Vazio!";

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name,
    });
  }

  return technologyList;
};

module.exports = techList;

// hydrate.js
const hydrate = (string) => {
  const splitString = string.split("");
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
  }

  let glass = "copo";

  if (glassesOfWater > 1) {
    glass = "copos";
  }

  return `${glassesOfWater} ${glass} de água`;
};

module.exports = hydrate;
