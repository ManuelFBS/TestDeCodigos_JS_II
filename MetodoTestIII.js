// Ignora la capitalización al coincidir.
/*La capitalización (o también llamada capitalización de letra) es la diferencia entre 
mayúsculas y minúsculas. Ejemplos de mayúsculas son A, B y C. Ejemplos de minúsculas 
son a, b y c.*/
/*Puede coincidir ambos casos utilizando algo llamado bandera. Existen otras banderas, 
pero aquí se centrará en la que ignora la capitalización de las letras, la bandera i. Puedes 
usarla añadiéndola a la expresión regular. Un ejemplo de uso de esta bandera es /ignorecase/i. 
Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase.*/
/*Escribe una expresión regular fccRegex para que coincida con freeCodeCamp sin importar 
su capitalización. Tu expresión regular no debe coincidir con ninguna abreviatura o variación 
con espacios.*/

let myString = 'freeCodeCamp';
// let myRegex = /freeCodeCamp/i;
// let myRegex = /frEEcODeCaMp/i;
let myRegex = /freecodeCAMP/i;
let result = myRegex.test(myString);

console.log(result);