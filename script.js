console.log("yaya");

let regleCaracteres = `Il a dit "C'est comme ça"`
console.log(regleCaracteres);

let utilisateur = {
    nom: "Garcia",
    prenom: "José",
    age: 54,
    membre: false,
    ditBonjour(){
        console.log("Salut " + this.prenom);
    },
    // on peut l'écrire comme ça aussi
    direBonjour: function() {
        console.log("Salut " + this.prenom);
    }
};
utilisateur.direBonjour();