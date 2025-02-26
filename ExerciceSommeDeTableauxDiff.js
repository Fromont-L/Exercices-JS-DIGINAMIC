// Exercice 9 - Exercice SommeDeTableauxDiff
/*
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let totalTableau1 = 0;
let totalTableau2 = 0;
for (let i = 0; i < array.length; i++) {
    totalTableau1 += array[i];
}

for (let y = 0; y < array2.length; y++) {
    totalTableau2 += array2[y];
}

let totalTableaux = totalTableau1 + totalTableau2;
console.log(totalTableaux);
*/

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let arraySomme = [];

console.log(array.length);
console.log(array2.length);

for (let i = 0; i < Math.max(array.length, array2.length); i++) {
    let valeurArray1 = array[i];
    let valeurArray2 = array2[i];

    if (valeurArray1 != undefined && valeurArray2 != undefined) {
        arraySomme.push(valeurArray1 + valeurArray2);
    } else if (valeurArray1 != undefined && valeurArray2 == undefined) {
        arraySomme.push(valeurArray1);
    } else if (valeurArray1 == undefined && valeurArray2 != undefined) {
        arraySomme.push(valeurArray2);
    }
}
console.log(arraySomme);
