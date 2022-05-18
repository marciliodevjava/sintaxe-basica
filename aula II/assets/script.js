var vOuF = false;
console.log(typeof(vOuF));

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//varivel generica
var nome = 'diana';
console.log(typeof(nome));

//variavel local
let variavel = 'diana';
console.log(variavel)

//constante
const variavel1 = 'ana';
console.log(variavel1);

//varial global
var escopoglobal = 'global';
console.log(escopoglobal);

//function escopo local
function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}

escopoLocal();
// atribuição
var atribuicao = 'diana';

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adicao
var adicao = 1 + 1;
console.log(adicao);

//subtraçao
var subtracao = 4 - 1;
console.log(subtracao);

// multiplicação
var multiplicacao = 3 * 2;
console.log(multiplicacao);

//divisão
var divisao = 2 / 2;
console.log(divisao);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//operadores logicos
//&& considera que todos os operadores são verdadeiros
var e = true && false;
console.log(e);

//|| considera um operador verdadeiro
var ou = true || false;
console.log(ou);

//! inverte, ser for verdeiro é falso, e ser for falso é verdadeiro
var nao = !false;
console.log(nao);