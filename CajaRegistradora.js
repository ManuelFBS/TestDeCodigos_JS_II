// Caja registradora
/*Diseña una función checkCashRegister() que acepte el precio de compra como primer 
argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en 
efectivo que tiene la caja (cid) como tercer argumento.
/*cid es un arreglo 2D que enumera las monedas disponibles.*/
/*La función checkCashRegister() siempre debe devolver un objeto con una clave status 
y una clave change.*/
/*Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor 
que el cambio necesario, o si no puedes devolver el cambio exacto.*/
/*Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave 
change es igual al cambio que se debe entregar.*/
/*En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar 
en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.*/

function checkCashRegister(price, cash, cid) {
        let change = cash - price;
        let totalCid = cid.reduce(function(x, y) {
                return x + y[1];
        }, 0.0);
        const moneyValues = [
                { name: 'ONE HUNDRED', val: 100.00 }, 
                { name: 'TWENTY', val: 20.00 },  
                { name: 'TEN', val: 10.00 }, 
                { name: 'FIVE', val: 5.00 }, 
                { name: 'ONE', val: 1.00 }, 
                { name: 'QUARTER', val: 0.25 }, 
                { name: 'DIME', val: 0.1 }, 
                { name: 'NICKEL', val: 0.05 }, 
                { name: 'PENNY', val: 0.01 }
        ];
        
        if (totalCid < change) {
                return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        
        if (change === totalCid) {
                return { status: "CLOSED", change: cid };
        };

        let reverseid = cid.slice().reverse();

        let bills = moneyValues.reduce(function(acc, next, index) {
                if (change >= next.val) {
                        let coins = 0.0;
                        while (change >= next.val && reverseid[index][1] >= next.val) {
                                change -= next.val;
                                change = change.toFixed(2);
                                reverseid[index][1] -= next.val;
                                coins += next.val;
                        }
                        acc.push([next.name, coins]);
                        return acc;
                }
                else {
                        return acc;
                }
        }, []);

        if (change % totalCid !== 0) return { status: "INSUFFICIENT_FUNDS", change: [] }; 
        
        return { status: "OPEN", change: bills };
}

// let checkCR = checkCashRegister(19.5, 20, [
//         ["PENNY", 1.01], 
//         ["NICKEL", 2.05], 
//         ["DIME", 3.1], 
//         ["QUARTER", 4.25], 
//         ["ONE", 90], 
//         ["FIVE", 55], 
//         ["TEN", 20], 
//         ["TWENTY", 60], 
//         ["ONE HUNDRED", 100]
// ]);

let checkCR = checkCashRegister(19.5, 20, [
        ["PENNY", 0.5], 
        ["NICKEL", 0], 
        ["DIME", 0], 
        ["QUARTER", 0], 
        ["ONE", 0], 
        ["FIVE", 0], 
        ["TEN", 0], 
        ["TWENTY", 0], 
        ["ONE HUNDRED", 0]
]);

console.log(checkCR);