// Hecer coincidir un solo carácter con múltiples posibilidades.
/*Se puede buscar un patrón literal con cierta flexibilidad utilizando las clases de 
caracteres. Las clases de caracteres te permiten definir un grupo de caracteres que 
deseas coincidir colocándolos dentro de corchetes ([ y ]).*/
/*Por ejemplo, si se quiere hacer coincidir bag, big, y bug pero no bog. Se puede 
crear la expresión regular /b[aiu]g/ para hacer esto. [aiu] es la clase de caracteres 
que solo coincidirá con los caracteres a, i, o u.*/
// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);
/*En orden, las cuatro llamadas de match devolverán los valores ["big"], ["bag"], 
["bug"], and null.*/

/*Usar una clase de caracteres con las vocales (a, e, i, o u) en la expresión regular 
'vowelRegex' para encontrar todas las vocales en la cadena quoteSample.*/
/*Nota: Asegurarse de hacer coincidir tanto las vocales mayúsculas como minúsculas.*/

let quoteSample = 'Beware of bugs in the above of code; I have only proved it correct, not tried it';
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

console.log(result);