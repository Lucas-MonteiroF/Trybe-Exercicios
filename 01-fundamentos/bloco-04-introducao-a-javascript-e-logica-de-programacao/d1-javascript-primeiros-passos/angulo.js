let angulo1 = 90;
let angulo2 = 40;
let angulo3 = 50;
let somaDosAngulos = (angulo1 + angulo2 + angulo3);

if (somaDosAngulos == 180) {

    console.log('true');

} else if (angulo1 < 0 | angulo2 < 0 | angulo3 < 0) {

    console.log("Erro - angulos inválidos");
    
} else {

    console.log('false');
}
