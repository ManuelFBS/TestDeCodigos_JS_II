// Extraer coincidencias
/*Hasta ahora, sólo has estado comprobando si un patrón existe o no dentro de una cadena. 
También puedes extraer las coincidencias encontradas con el método .match().*/
/*Para utilizar el método .match(), aplica el método a una cadena y pasa la expresión regular 
dentro de los paréntesis.*/
/*Este es un ejemplo:*/

/*"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);*/

/*Aquí el primer match devolverá ["Hello"] y el segundo devolverá ["expressions"].*/
/*Hay que tener en cuenta que la sintaxis .match es lo "opuesto" al método .test que se ha 
estado utilizando hasta ahora:*/

/*'string'.match(/regex/);
/regex/.test('string');

Aplicar el método .match() para extraer la cadena coding.*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);