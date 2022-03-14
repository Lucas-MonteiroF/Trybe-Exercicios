const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947(array) {
  const ano = [];
  for (let index = 0; index < array.length; index += 1) {
    ano.push(array[index].author.birthYear);
  }
  const encontrado = ano.find((nascimento) => nascimento === 1947);
  //return console.log(encontrado);
}
authorBornIn1947(books);

function smallerName(array) { //source: https://reactgo.com/javascript-sort-array-by-length/
  let nameBook;
  let list = [];
  for (let index = 0; index < array.length; index += 1) {
    list.push(array[index].name);
  }
  list.sort((a, b) => a.length - b.length);
  nameBook = list[0];
  //return console.log(nameBook);
}
smallerName(books);

function getNamedBook(array) {
  const resultado = array.find((item) => item.name.length === 26);
  //return console.log(resultado);
}
getNamedBook(books);

function booksOrderedByReleaseYearDesc(array) {
  const ordem = array.sort((a ,b) => b.releaseYear - a.releaseYear);
  //return console.log(ordem);
}
booksOrderedByReleaseYearDesc(books);

function everyoneWasBornOnSecXX(array) {
  const nascimento = array.map((item) => item.author.birthYear);
  const resultado = nascimento.every((item) => item > 1901 && item < 2000);
  //return console.log(resultado);
}
everyoneWasBornOnSecXX(books);

function someBookWasReleaseOnThe80s(array) {
  const lancamento = array.some((item) => item.releaseYear > 1980 && item.releaseYear < 1989);
  //return console.log(lancamento);
}
someBookWasReleaseOnThe80s(books);

function authorUnique(array) {
  const nascimento = array.map((item) => item.author.birthYear);
  for (let index = 0; index < nascimento.length; index += 1) {
    if (nascimento[index] === nascimento[index]) {
      return console.log(false);
    } else { 
      return console.log(true); }
  }
}
authorUnique(books);
