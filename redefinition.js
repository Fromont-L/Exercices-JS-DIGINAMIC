/*

// AVANT 2015

function Personne(nvNom, nvPrenom, nvAge) {
    // Propriété, variable d'instance
    this.nom = nvNom;
    this.prenom = nvPrenom;
    this.age = nvAge;

    this.afficherIdentite = function() {
        console.log(`Je m'appelle ${this.prenom} ${this.nom}`)
    }

}

let p1 = new Personne("NOMNOM", "Yaya", 41);
p1.afficherIdentite();
console.log(p1.nom);
*/

// APRES 2015

class Personne {
    constructor(nvNom, nvPrenom, nvAge=0) {
        // Propriété, variable d'instance
        this.nom = nvNom;
        this.prenom = nvPrenom;
        this.age = nvAge;
    }

    // Propriété date naissance
    dateNaissance() {
        return 2025-this.age;
    }

    majorite() {
        if (this.age < 18) {
            console.log(this.nom, "Gamin !");
        }
    }
    
}
// création d'une nouvelle personne
let pe1 = new Personne("NOMNOM", "Yaya", 41);
let pe2 = new Personne("YAYA", "Talchetane", 27);
let pe3 = new Personne("JAAAJ", "José");

console.log(pe1.nom, pe1.prenom, pe1.age);
console.log(pe1.dateNaissance());
console.log(pe1.majorite());
console.log(pe2.majorite());
console.log(pe3.majorite());

// Acceder directement aux variables d'instance ► MAUVAISE PRATIQUE
pe1.nom = "BONNOM";
pe1.age = 64;
console.log(pe1.nom, pe1.age);
// RAISON 1 : Moins de contrôle -> accès en lecture pas en écriture
// RAISON 2 : Variables liées

class Facture {
    constructor(consommation){
        this.montant = consommation * 0.15;
        this.consommation = consommation;
    }
}

let f = new Facture(100);
console.log(f.consommation, f.montant);

f.montant = 20; // JE NE DOIS PAS AUTORISER A MODIFIER LE MONTANT CAR MONTANT DEPEND UNIQUEMENT DE CONSOMMATION !!!

/* RAISON 3 : Il faut toujours masquer l'organisation d'une classe → en cas de modification de la structure
d'une classe, les coûts de dev peuvent être énormes si tous les attributs sont restés en public !! */

/*
class GestionnaireTaches {
    constructor(nom) {
        this.nom = nom;
        this.taches = []; // Comment changer mon tableau en autre chose sans impacter toute l'application ? = On peut pas !!!

    }
    ajouter(tache){
        this.taches.push(tache); // Si je change le tableau de tache par autre chose, seule la méthode ajouter() est impactée
    }
}

let g1 = new GestionnaireTaches("Mois de mars");

// On fait ça à la place de ce qu'il y a en dessous
g1.ajouter({id:1, libelle:"penser à nanana..."});
// g1.taches.push({id:1, libelle:"penser à chier"});
*/

// Avec la bonne pratique d'encapsulation
class GestionnaireTaches2 {

    #nom;
    #taches;
    #age;

    constructor(nom) {
        this.#nom = nom;
        this.#taches = []; // Comment changer mon tableau en autre chose sans impacter toute l'application ? = On peut pas !!!
        this.#age = this.#age;

    }
    ajouter(tache){
        this.#taches.push(tache); // Si je change le tableau de tache par autre chose, seule la méthode ajouter() est impactée
    }

    afficher(){
        console.log(this.#nom + ":");
        this.#taches.forEach(g=>console.log("-" + g.libelle));
    }

    // GETTER
    get nom() {
        return this.#nom;
    }

    get age() {
        return this.#age;
    }

    // SETTER
    set nom(nvNom) {
        this.#nom = nvNom;
    }

    set age(nvAge) {
        this.#age = nvAge;
    }

};

let g1 = new GestionnaireTaches2("Mois de Janvier");
g1.ajouter({id:1, libelle:"penser à manger du pâté"});
g1.ajouter({id:2, libelle:"penser à manger des chips"});

console.log(g1.nom); // Utilise le Getter get nom()
g1.nom = "Mois d'avril"; // Utilise le Setter set nom(nvNom)

console.log(g1.age); // Utilise le Getter get nom()
g1.age = 55; // Utilise le Setter set nom(nvNom)





























class Vehicule {
    seDeplacer() {
        console.log("Je me déplace");
    }
}

class Voiture extends Vehicule {
    seDeplacer() {
        super.seDeplacer();
        console.log("Je me déplace en roulant");
    }
}

let v = new Voiture();
v.seDeplacer();