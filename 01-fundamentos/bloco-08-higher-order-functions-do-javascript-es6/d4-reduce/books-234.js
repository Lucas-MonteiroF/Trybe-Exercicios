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

function reduceNames(array) {
  return console.log(
    array
      .map((item) => item.author.name)
      .reduce((item1, item2) => item1.concat(", ", item2))
  );
}
//reduceNames(books);

function averageAge(array) {
  const idades = array.map((item) => item.releaseYear - item.author.birthYear);
  const livros = array.length;
  let soma = idades.reduce((idade, livro) => idade + livro);
  return console.log(soma / livros);
}
//averageAge(books);

function longestNamedBook(array) {
  return console.log(
    array.reduce((maiorTitulo, livroAtual) => {
      if (livroAtual.name.length > maiorTitulo.name.length) {
        return livroAtual;
      }
      return maiorTitulo;
    })
  );
}
//longestNamedBook(books);
