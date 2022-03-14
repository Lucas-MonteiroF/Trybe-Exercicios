const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA(array) {
  return console.log(
    array.reduce(
      (item1, item2) =>
        item1 +
        item2.split("").reduce((total, atual) => {
          if (atual === "a" || atual === "A") return total + 1;
          return total;
        }, 0), 0));
}
//containsA(names);

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage(array) {
  return console.log(
    array.map((aluno, media) => ({
      name: aluno,
      media:
        grades[media].reduce((contador, atual) => contador + atual, 0) /
        grades[media].length,
    }))
  );
}
studentAverage(students);
