const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([modelo, fabricante, ano]) => {
  const obj = {};
  Object.assign(obj, { Modelo: modelo, Montadora: fabricante, Ano: ano });
  return obj;
};

console.log(toObject(chiron));
