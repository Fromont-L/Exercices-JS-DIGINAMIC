// Exercice 8 - Exercice SommeDeTableaux

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];
let arraySomme = [];

for (let i = 0; i < array.length; i++) {
    arraySomme.push(array[i]+array2[i]);
}

console.log(arraySomme);
