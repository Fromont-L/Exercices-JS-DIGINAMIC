class Personne {

    #nom;
    #prenom;
    #age;

    constructor(nvNom, nvPrenom, nvAge) {
        // Propriété, variable d'instance
        this.nom = nvNom;
        this.prenom = nvPrenom;
        this.age = nvAge;
    }

    // Propriété date naissance
    dateNaissance() {
        return 2025-this.age;
    }

}

class Salarie extends Personne {
    #salaire


    constructor(nvNom, nvPrenom, nv,Age, nvSalaire) {
        super(nvNom, nvPrenom, nv,Age);
        this.#salaire = nvSalaire;
    }
}

let s1 = new Salarie("JOSE", "Jean", 25, 3210);
console.log(s1.dateNaissance());
console.log(s1)

