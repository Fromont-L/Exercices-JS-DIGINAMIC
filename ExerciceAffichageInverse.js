// Exercice 3 - Exercice AffichageInverse

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