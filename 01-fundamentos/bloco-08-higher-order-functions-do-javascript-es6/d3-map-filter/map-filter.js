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

function formatedBookNames(array) {
  let nome = array.map((titulos) => titulos.name);
  let genero = array.map((classe) => classe.genre);
  let autor = array.map((pessoa) => pessoa.author.name);
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    resultado.push(`${nome[index]} - ${genero[index]} - ${autor[index]}`);
  }
  return console.log(resultado);
}
//formatedBookNames(books);

function nameAndAge() {
  return console.log(
    books
      .map((item) => ({
        author: item.author.name,
        age: item.releaseYear - item.author.birthYear,
      }))
      .sort((obj1, obj2) => obj1.age - obj2.age)
  );
}
//nameAndAge(books);

function fantasyOrScienceFiction(array) {
  return console.log(
    array.filter(
      (item) => item.genre === "Ficção Científica" || item.genre === "Fantasia"
    )
  );
}
//fantasyOrScienceFiction(books);

function oldBooksOrdered(array) {
  const anoAtual = 2022;
  return console.log(
    array
      .filter((item) => item.releaseYear < anoAtual - 60)
      .sort((item1, item2) => item1.releaseYear - item2.releaseYear)
  );
}
//oldBooksOrdered(books);

function fantasyOrScienceFictionAuthors(array) {
  return console.log(
    array
      .filter(
        (item) =>
          item.genre === "Ficção Científica" || item.genre === "Fantasia"
      )
      .map((item) => item.author.name)
      .sort()
  );
}
//fantasyOrScienceFictionAuthors(books);

function oldBooks(array) {
  const anoAtual = 2022;
  return console.log(
    array
      .filter((item) => item.releaseYear < anoAtual - 60)
      .map((item) => item.name)
  );
}
//oldBooks(books);

function authorWith3DotsOnName(array) {
  return console.log(
    array
      .map((item) => item.author.name)
      .filter((item) => item[1] && item[4] && item[7] === ".")
  );
}
//authorWith3DotsOnName(books);
