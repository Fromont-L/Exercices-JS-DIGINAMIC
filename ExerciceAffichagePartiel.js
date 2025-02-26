// Exercice 5 - Exercice AffichagePartiel

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