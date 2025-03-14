// Exercice 11 - Exercice FirstLast6

let array = [6, 15, 8, 6, 7, 4, 28, 7, 17, 2, 3, 4];

let dernierListe = array.length-1;
if (array.length >= 1 && (array[0] == 6 || array[dernierListe] == 6)) {
    console.log(true);
} else {
    console.log(false);
}
