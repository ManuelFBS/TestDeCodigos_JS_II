// Cifrado César [ROT13]...
function codeRt13 (str) {
        const alfa1 = [ 
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '.', ',', '!', '?' 
        ];
        const alfa2 = [ 
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 
                'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', ' ', '.', ',', '!', '?' 
        ];
        let st = str.toUpperCase().split('');
        let stCod = [];
        //
        for (let i = 0; i < st.length; i++) {
                for (let j = 0; j < alfa1.length; j++) {
                        if (st[i] === alfa1[j]) stCod.push(alfa2[j]);
                }
        }

        return stCod.join('');
}

let string = codeRt13('La casa era blanca, ahora es amarilla.');
let stringII = codeRt13('SERR PBQR PNZC');
let stringIII = codeRt13('De quién es esa casa?');
let stringIV = codeRt13('Es una montaña muy grande');

console.log(string);
console.log(stringII);
console.log(stringIII);
console.log(stringIV);