// Encuentra más que la primera coincidencia.
/*let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Aquí match devolverá ["Repeat"].*/
/*Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g.*/
/*let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
Y aquí match devuelve el valor ["Repeat", "Repeat", "Repeat"]*/
/*Utilizando la expresión regular starRegex, encuentra y extrae ambas palabras 
Twinkle de la cadena twinkleStar.*/
// Nota:
// En la expresión regular se puede utilizar múltiples banderas, como /string/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex);

console.log(result);