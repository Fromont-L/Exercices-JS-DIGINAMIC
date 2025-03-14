// FonctionConstante

function retourneNombre() {
    return 33;
}
console.log(retourneNombre());



// BonjourUntel

function bonjourMarcel(nom) {
    console.log("Bonjour " + nom);
}
bonjourMarcel(2);
bonjourMarcel("Marcel");



// FonctionCalcul

function deuxNombres(a, b) {
    return a * b + a + b;
}
let resultat = deuxNombres(3,5);
console.log(resultat);

// Ce résultat multiplie a par b (15), et viens ensuite concatener a (3), puis b (5) 
let resultatCaractere = deuxNombres("3","5");
console.log(resultatCaractere);



// FonctionControleTableau

let liste1 = [12, 345, 1, 65];
let liste2 = [12, "345", 1, 65];
let liste3 = [];
function verifierContenuTableau(liste) {
    if (!liste || liste.length == 0) {
        return false;
    }
    for (let i = 0; i < liste.length; i++) {
        if (typeof liste[i] !== 'number') {
            return false;
        }
    }
    return true;
}

function verifierListes(...listes) {
    listes.forEach((liste, index) => {
        console.log(`Liste ${index + 1} ne contient que des nombres:`, verifierContenuTableau(liste));
    });
}

verifierListes(liste1, liste2, liste3);




// FonctionMoyenne

let tableau = [12, 1, 5, 4, 9, 45, 1, 8, 7, 6];

function moyenneTableau(tableau) {

    if (!tableau || tableau.length == 0) {
        return 0;
    }
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau !== 'sring') {
            
        }
        
    }

    for (let i = 0; i < tableau.length; i++) {
        total += tableau[i];
    }
    return Math.round(tableau);
}

console.log(moyenneTableau())


// FonctionMaj
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeSentence(sentence) {
    return sentence.split(' ').map(capitalizeFirstLetter).join(' ');
}

console.log(capitalizeSentence("Bonjour tout le monde")); // "Bonjour Tout Le Monde"



// FonctionFonction

function fonction1(n) {
    let nouvFonction = function(nb) {
        return n*nb;
    }
    return nouvFonction;
}
let double = fonction1(2)
let triple = fonction1(3)

console.log(double(4));
console.log(triple(4));




// FonctionGestionTaches

function creerGestionnaire() {
    let gestionnaire = {
        taches : [],
        ajouterTache : function(description) {
            let tache = {
                description : description, terminee : false
            }
            this.taches.push(tache);
        },
        terminerTache : function(index) {
            this.taches[index].terminee = true;
        },
        afficherTaches : function() {
            for (let i = 0; i < this.taches.length; i++) {
                console.log(this.taches[i].description+" "+ (this.taches[i].terminee ? "Oui" : "Non"));
            }
        }
    };
    return gestionnaire;
}
let gestionnaire1 = creerGestionnaire();
let gestionnaire2 = creerGestionnaire();

gestionnaire1.afficherTaches();
gestionnaire1.ajouterTache("Vaisselle");
gestionnaire1.ajouterTache("Courses");
gestionnaire1.ajouterTache("Ménage");
gestionnaire1.afficherTaches();
gestionnaire1.terminerTache(0);
gestionnaire1.afficherTaches();