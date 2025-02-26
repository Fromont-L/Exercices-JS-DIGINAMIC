// Exercice 12 - Exercice FirstLast

let array = [1, 15, 8, 6, 7, 4, 28, 7, 17, 2, 3, 1];
let dernierListe = array.length-1;

if (array.length > 1 && array[0] == array[dernierListe]) {
    console.log(true);
} else {
    console.log(false);
}