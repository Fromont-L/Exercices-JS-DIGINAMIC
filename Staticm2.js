class CompteBancaire {
    #solde;

    constructor(solde) {
        this.#solde = solde;
    }

    // Méthode static n'aas pas accès aux attributs d'instance (#)
    // Si ne méthode n'accède pas aux attributs d'instance de la classe, elle peut être static
    calculer(a, b) {
        return CompteBancaire.taux * 2;
    }
}



// Appel Static
console.log(CompteBancaire.calculer(10, 15));

// Appel Non Static
let ope = new Operation();
console.log(ope.calculer(10, 15));