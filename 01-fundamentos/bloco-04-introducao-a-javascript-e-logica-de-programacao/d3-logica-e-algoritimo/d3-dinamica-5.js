let idadeCarolzita = Math.floor(Math.random() * (100-0+1));
let idadeMurilo = Math.floor(Math.random() * (100-0+1));
let idadeBaeta = Math.floor(Math.random() * (100-0+1));

if (idadeCarolzita < idadeBaeta && idadeMurilo) {

    console.log("Carolzita é a mais nova.");

} else if (idadeBaeta < idadeCarolzita && idadeMurilo) {

    console.log("Baêta é a mais nova.");

} else if (idadeMurilo < idadeCarolzita && idadeBaeta) {

    console.log("Murilo é o mais novo");

}