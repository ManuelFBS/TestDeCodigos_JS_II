// Hacer coincidir los números y las letras del alfabeto.

let quoteSample = 'Blueberry 3.141592653s are delicious.';
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

console.log(result);