// Hacer coincidir las letras del alfabeto.
/*Dentro de un conjunto de caracteres, se puede definir un rango de caracteres a 
coincidir usando un carácter de guion: '-'.*/
/*Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías [a-e].*/
// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex);
// batStr.match(bgRegex);
// matStr.match(bgRegex);
/*En orden, las tres llamadas a match devolverán los valores ["cat"], ["bat"] y null.*/
/*Hacer coincidir todas las letras en la cadena quoteSample.
Nota: Asegurarse de hacer coincidir tanto las letras mayúsculas como minúsculas.*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

console.log(result);