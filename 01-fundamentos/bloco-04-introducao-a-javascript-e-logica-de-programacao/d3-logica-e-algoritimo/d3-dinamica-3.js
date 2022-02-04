
//Exercicio 3

let opcoes1 = ["pedra", "papel", "tesoura"];
let opcoes2 = ["pedra", "papel", "tesoura"];
let player1 = opcoes1[Math.floor(Math.random() * opcoes1.length)];
let player2 = opcoes2[Math.floor(Math.random() * opcoes2.length)];


if (player1 === player2) {
  console.log("Ora, ora, temos um empate.");
} else if (player1 === "pedra" && player2 !== "papel") {
  console.log("Vitória do Player1!!!");
  
} else if (player1 === "papel" && player2 !== "tesoura") {
  console.log("Vitória do Player1!!!");
  
} else if (player1 === "tesoura" && player2 !== "pedra") {
  console.log("Vitória do Player1!!!");
  
} else if (player2 === "pedra" && player1 !== "papel") {
  console.log("Vitória do Player2!!!");
  
} else if (player2 === "papel" && player1 !== "tesoura") {
  console.log("Vitória do Player2!!!");
  
} else if (player2 === "tesoura" && player1 !== "pedra") {
  console.log("Vitória do Player2!!!");
  
}
