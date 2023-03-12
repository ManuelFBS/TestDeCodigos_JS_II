// Validador de números telefónicos
/*Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos. 
El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato 
de un número estadounidense válido. Los siguientes ejemplos son de formatos válidos para números 
estadounidenses (Se debe probar para otras variantes):*/

// 5555555555     (10)
// 555-555-5555     (12)     // 555 555 5555     (12)

// (555)555-5555     (13)

// (555) 555-5555     (14)     // 1 555 555 5555     (14)     //  1 555-555-5555     (14)     // 1(555)555-5555     (14)

// 1 (555) 555-5555     (16)

/*Para esto, se presentará una cadena como 800-692-7753 o 8oo-six427676;laskdjf. El trabajo es 
validar o rechazar el número de teléfono estadounidense basado en cualquier combinación de los 
formatos proporcionados arriba. El código de área es obligatorio. Si el código de país es proporcionado, 
debes confirmar que el código de país es 1. Devuelve true si la cadena es un número de teléfono 
estadounidense valido; de lo contrario devuelve false.*/

function telephoneCheck(strNum) {
        let numType;

        switch (strNum.length) {
                case 10:     // 5555555555
                        numType = (strNum[0] !== '1') ? true : false;
                        break;
                case 11:     // 15555555555
                        numType = (strNum[0] === '1') ? true : false;
                        break;
                case 12:     // 555-555-5555     // 555 555 5555
                        numType = (strNum[0] !== '1' && strNum[3] === '-' && strNum[7] === '-' || strNum[3] === ' ' && strNum[7] === ' ') ? true : false;
                        break;
                case 13:     // (555)555-5555
                        numType = (strNum[0] === '(' && strNum[4] === ')' & strNum[8] === '-') ? true : false; 
                        break;
                case 14:     // (555) 555-5555     // 1 555 555 5555     //     1 555-555-5555     // 1(555)555-5555
                        numType = (strNum[0] === '(' && strNum[4] === ')' && strNum[5] === ' ' && strNum[9] === '-') 
                                ? true 
                                : (strNum.includes('1 ') === true && strNum[5] === ' ' && strNum[9] === ' ')
                                ? true 
                                : (strNum.includes('1 ') === true && strNum[5] === '-' && strNum[9] === '-') 
                                ? true 
                                : (strNum.includes('1(') === true && strNum[5] === ')' && strNum[9] === '-') 
                                ? true 
                                : false;
                                break;
                case 16:     // 1 (555) 555-5555
                        numType = (strNum.includes('1 (') === true && strNum.includes(') ') === true && strNum[11] === '-') ? true : false;
                        break;
                default:
                        numType = false;
        }

        return numType;
}

// let check = telephoneCheck("555-555-5555");
// let check = telephoneCheck("555 555 5555");
// let check = telephoneCheck('13054088487');
// let check = telephoneCheck('(735)904-2375');
let check = telephoneCheck('(555)555-5555');
// let check = telephoneCheck('(297) 743-0221');
// let check = telephoneCheck('1 (788) 256-1008');
// let check = telephoneCheck('1 555-555-5555');
// let check = telephoneCheck('1(555)555-5555');

console.log(check);