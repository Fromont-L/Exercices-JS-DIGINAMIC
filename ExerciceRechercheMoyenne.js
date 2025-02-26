// Exercice 8 - Exercice CalculMoyenne

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let total = 0;
for (let i = 0; i < array.length; i++) {
    total += array[i];
}
let moyenne = total / array.length;
console.log(moyenne);
