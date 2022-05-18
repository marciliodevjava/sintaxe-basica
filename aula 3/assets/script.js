// vetores e arrays
let array = ['string', 1, true];
console.log(array);

//pode guardar varios tipos de dados
let arra1 = ['string', 1, true, ['string2', 2, true],['string3', 3, true],['string4', 4, true,],['string5', 5, true,]];
console.log(arra1);

//acessar um indice do array
let array2 = [1,2,3,['array'],['array'],6,7];
console.log(array2[2])

// forEach - iteração com o array
array2.forEach(function(item, index){console.log(item, index)});

//push - add um item no final do array
array2.push('novo item');
console.log(array2);

// pop - remove um item no final do array
array2.pop();
console.log(array2);

// shift - remove um item no inicio do array
array2.shift();
console.log(array2);

// unshift - add um item no inicio do array
array2.unshift('primeiro item');
console.log(array2);

// indexOf - retorna o indice de um item
console.log(array2.indexOf(true));

//spice - remove ou subtitue um item no array
// removendo
array2.splice(0,3);
console.log(array2);

//slice = retorna uma parte do array já existe
let novoArray = array2.slice(0, 3);
console.log(novoArray);

// object
let object = { string: 'ana', number: 1, boolean: true, array: ['array'], objectInterno: { objectInterno: 'Objeto interno'}};
console.log(object.objectInterno);