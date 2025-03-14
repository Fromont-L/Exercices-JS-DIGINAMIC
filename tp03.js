// Exercice 1 - Exercice AffichageSuivant
/*
let valeur = 5;
for (let i = valeur + 1; i < valeur + 11; i++) {
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    console.log(i+valeur);
}
*/

// Exercice 2 - Exercice CalculSomme
/*
let valeur = 7;
let calcul = null;
for (let i = 1; i < valeur + 1; i++) {
    calcul += i;
}
console.log(calcul);
*/


// Exercice 3 - Exercice AffichageInverse
/*
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log(`Éléments dans l'ordre : `);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(`Éléments dans l'ordre inverse : `);
for (let i = array.length -1; i >= 0; i--) {
    console.log(array[i]);
}

let arrayCopy2 = [];
for (let i = 0; i < array.length; i++) {
    arrayCopy2.push(array[i]);
}
console.log(arrayCopy2)

let arrayCopy = array.slice(0);
console.log(arrayCopy);

//let trier = array.reverse();
//console.log(array);
*/



// Exercice 4 - Exercice InversionContenu
/*
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let arrayCopy = [];
for (let i = array.length -1 ; i >= 0; i--) {
    arrayCopy.push(array[i]);
}
console.log(array);
console.log(arrayCopy);

// let arrayCopy = array.slice();
// console.log(array.reverse());
*/


// Exercice 5 - Exercice AffichagePartiel
/*
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

console.log("Affiche les entiers supérieurs à 3 : ")
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3) {
        console.log(array[i])
    }
}

console.log("Affiche les entiers pairs : ")
for (let i = 0; i < array.length; i++) {
    if (array[i] %2 == 0) {
        console.log(array[i])
    }
}

console.log("Affiche les valeurs des index pairs : ")
for (let i = 0; i < array.length; i++) {
    if (i %2 == 0) {
        console.log(array[i])
    }
}

console.log("Affiche les entiers impairs : ")
for (let i = 0; i < array.length; i++) {
    if (array[i] %2 == 1) {
        console.log(array[i])
    }
}
*/

// Exercice 6 - Exercice RechercheMax
/*
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

console.log(Math.max(...array));
*/


// Exercice 7 - Exercice RechercheMin
/*
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

console.log(Math.min(...array));
*/



// Exercice 8 - Exercice CalculMoyenne
/*
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let total = 0;
for (let i = 0; i < array.length; i++) {
    total += array[i];
}
let moyenne = total / array.length;
console.log(moyenne);
*/



// Exercice 8 - Exercice SommeDeTableaux
/*
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];
let arraySomme = [];

for (let i = 0; i < array.length; i++) {
    arraySomme.push(array[i]+array2[i]);
}

console.log(arraySomme);
*/

// Exercice 9 - Exercice SommeDeTableauxDiff
/*
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
*/




// Exercice 10 - Exercice ComparaisonTableaux
/*
let array1 = [1, 15, -3, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];
let compteur = 0;

for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
        compteur += 1;
    }
}

console.log(compteur);
*/




// Exercice 11 - Exercice FirstLast6
/*
let array = [6, 15, 8, 6, 7, 4, 28, 7, 17, 2, 3, 4];

let dernierListe = array.length-1;
if (array.length >= 1 && (array[0] == 6 || array[dernierListe] == 6)) {
    console.log(true);
} else {
    console.log(false);
}
*/


// Exercice 12 - Exercice FirstLast
/*

let array = [1, 15, 8, 6, 7, 4, 28, 7, 17, 2, 3, 1];
let dernierListe = array.length-1;

if (array.length > 1 && array[0] == array[dernierListe]) {
    console.log(true);
} else {
    console.log(false);
}
*/



// Exercice 12 - Exercice Rotation (Facultatif)




