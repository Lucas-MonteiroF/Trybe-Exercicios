let peças = ['peões', 'bispos', 'cavalos', 'torres', 'Rei', 'Rainha']

function xadrez (peças) {


if (peças == 'peões') {

    console.log('O Peão move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');

} else if (peças == 'bispos') {

    console.log('O Bispo move-se na diagonal, quantas casas quiser.');
    
} else if (peças == 'torres') {

    console.log('Torres movem-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');

} else if (peças == 'cavalos') {

    console.log('O Cavalo pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.');
    
} else if (peças == 'Rei') {

    console.log('O Rei pode mover-se em qualquer direção, porém apenas uma casa por vez.');

} else if (peças == 'Rainha') {

    console.log('Assim como o Rei, a Rainha pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser');
    
}
}

xadrez ('cavalos');