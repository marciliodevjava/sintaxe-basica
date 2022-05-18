var jogador1 = 0;
var jogador2 = 0;
var placar;

//condição IF
if(jogador1 > 0){
    console.log('Jogador 1 marcouo ponto!');
} else if(jogador2 > 0){
    console.log('Jogador 2 marcouo ponto!');
} else {
    console.log('Ninguem marcou ponto!')
}

//condição if dentro do outro
if(jogador1 != -1){
    if(jogador1 > 0){
        console.log('Jogador 1 marcouo ponto!');
    } else if(jogador2 > 0){
        console.log('Jogador 2 marcouo ponto!');
    } else {
        console.log('Ninguem marcou ponto!')
    }
}

// if ternario
 jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores invalidos');
 // usando if
 if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcouo ponto!');
    placar = jogador1 > jogador2;
// usando else if
} else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcouo ponto!');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguem marcou ponto!')
}

// switch

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 Ganhou!');
        break;
    default:
        console.log('Ninguem ganhou! - Utilizando o Break');
}

//for - executa um instrução até que ela seja false
let array = ['Valor1', 'Valor2', 'Valor3', 'Valor4', 'Valor5'];
let object = { propriedade1: 'Valor1', propriedade2: 'Valor2', propriedade3: 'Valor3',};

// for
for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
    console.log(array[indice]);
}

// for in - Funciona como uma repetição a partir de uma propriedade
for(let i in array){
    console.log(i);
}

for(i in object){
    console.log(i);
    console.log(object[i]);
}

// for/of
for(i of array){
    console.log(i);
    console.log(array[i]);
}
//ele vai imprimir uma letra em cada linha
for(i of object.propriedade1){
    console.log(i);
}

//while
var a = 0;
while( a < 10){
    console.log(a);
    a++;
}

// do while
console.log('Do While');
do {
    a++;
    console.log(a);
} while (a < 20);