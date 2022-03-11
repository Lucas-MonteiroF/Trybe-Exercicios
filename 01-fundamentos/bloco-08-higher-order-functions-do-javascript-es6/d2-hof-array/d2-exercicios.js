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

// Adicione o código do exercício aqui:

function authorBornIn1947(array) {
  // escreva aqui o seu código
  const ano = [];
  for (let index = 0; index < array.length; index += 1) {
    ano.push(array[index].author.birthYear);
  }
  const encontrado = ano.find((nascimento) => nascimento === 1947);
  return console.log(encontrado);
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
  return console.log(nameBook);
}
smallerName(books);

function getNamedBook() {
  // escreva seu código aqui
}

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
}

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
}

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
}

function authorUnique() {
  // escreva seu código aqui
}
