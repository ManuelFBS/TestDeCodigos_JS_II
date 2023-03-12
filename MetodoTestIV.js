// Hacer coincidir cualquier cosa con el comodín punto.
/*A veces no se  conoce (o no se necesita conocer) los caracteres exactos en tus 
patrones. Pensar en todas las palabras que coincidan, digamos, con una ortografía 
errónea llevaría mucho tiempo. Afortunadamente, se puede ahorrar tiempo 
utilizando el carácter de comodín: '.'*/
/*El carácter de comodín '.' coincidirá con cualquier carácter único. El comodín 
también es llamado dot y period. Se puede utilizar el carácter de comodín como 
cualquier otro carácter en la expresión regular. Por ejemplo, si se quiere hacer 
coincidir hug, huh, hut, y hum, se puede usar la la expresión regular /hu./ para 
que coincida con las cuatro palabras.*/
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr);
// huRegex.test(hugStr);
/*Ambas llamadas a test devolverán true.*/
/*Completar la expresión regular unRegex para que coincida con las cadenas 
run, sun, fun, pun, nun, y bun. La expresión regular debe usar el carácter de comodín '.'*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result);