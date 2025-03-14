let creationJson = {
    "nomEntreprise" : "Google",

    "siegeSocial" : "Googleplex, Mountain view, California, United States",

    "fondateurs" : [{
        "nom" : "Page",
        "prenom" : "Larry",
        "anneeNaissance" : "26/03/1973",
        "lieuNaissance" : "East Lansing, Michigan"
    },{
        "nom" : "Brin",
        "prenom" : "Sergei",
        "anneeNaissance" : "21/08/1973",
        "lieuNaissance" : "Moscou, Union Soviétique"
    }],

    "chiffreAffaire" : [
        {"date" : "2008", "chiffre" : 16.49},
        {"date" : "2012", "chiffre" : 37.97},
        {"date" : "2016", "chiffre" : 89.46},
        {"date" : "2028", "chiffre" : 136.2}
    ]
};

console.log("Les fondateurs de " + creationJson.nomEntreprise + " sont : ");
for (let i = 0; i < creationJson.fondateurs.length; i++) {
    let fondateur = creationJson.fondateurs[i];
    console.log(fondateur.prenom + " " + fondateur.nom + ", né(e) le " + fondateur.anneeNaissance + " à " + fondateur.lieuNaissance);
}

console.log(`Les chiffres d'affaires de ` + creationJson.nomEntreprise + " sont : ");
for (let j = 0; j < creationJson.chiffreAffaire.length; j++) {
    let annee = creationJson.chiffreAffaire[j];
    console.log(annee.date + " : " + annee.chiffre + " milliards de dollars");
}
