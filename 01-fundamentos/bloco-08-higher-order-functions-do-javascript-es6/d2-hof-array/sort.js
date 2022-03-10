const estudantes = [
    {
      nome: 'Joel',
      Projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Mica',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Hugonardo',
      Projeto: 'Trybewarts',
      status: 97,
    },
    {
      nome: 'Aninha',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Joicy',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Ronald',
      Projeto: 'Trybewarts',
      status: 75,
    },
  ];
  

// 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.
const ordenaEstudantesStatus = (array) => {
    let notas = [];
    for (let index = 0; index < array.length; index++) {
        notas.push(array[index].status);
    };
    return console.log(notas.sort((a, b) => {return a < b}));
};
ordenaEstudantesStatus(estudantes);

// 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica dos nomes das pessoas estudantes.
const ordenaEstudantesNome = (array) => {
    let nomes = [];
    for (let index = 0; index < array.length; index++) {
        nomes.push(array[index].nome);
    };
    return console.log(nomes.sort((a, b) => {return a > b}));
};
ordenaEstudantesNome(estudantes);