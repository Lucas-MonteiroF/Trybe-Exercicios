const gabarito = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const respostasAluno = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const verificaAcertos = (gabarito, respostasAluno) => {
  if (gabarito === respostasAluno) {
    return 1;
  }
  if (respostasAluno === "N.A") {
    return 0;
  }
  return -0.5;
};

const contador = (gabarito, respostasAluno, action) => {
    let nota = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        const actionReturn = action(gabarito[i], respostasAluno[i]);
        nota += actionReturn;
    }
    return `Nota final: ${nota} pontos`;
}

console.log(contador(gabarito,respostasAluno, verificaAcertos));
