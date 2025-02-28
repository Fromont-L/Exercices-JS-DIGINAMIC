function addition(id1, id2) {
    let nombre1 = parseInt(document.querySelector("#" + id1).value);
    let nombre2 = parseInt(document.querySelector("#" + id2).value);
    let resultat = document.querySelector("#resultat");
    let calcul = nombre1 + nombre2;
    resultat.innerHTML = "Le résultat de l'addition est : " + calcul;

    console.log(nombre1);
    console.log(nombre2);
    console.log(calcul);
}

/*
function additionOld() {
    let nombre1 = parseInt(document.querySelector("#nombre1").value);
    let nombre2 = parseInt(document.querySelector("#nombre2").value);
    let resultat = document.querySelector("#resultat");
    let calcul = nombre1 + nombre2;
    resultat.innerHTML = "Le résultat de l'addition est : " + calcul;

    console.log(nombre1);
    console.log(nombre2);
    console.log(calcul);
}
*/

function calculer() {
    let nombre11 = parseInt(document.querySelector("#nombre11").value);
    let nombre22 = parseInt(document.querySelector("#nombre22").value);
    let selecteur = document.querySelector("#selecteur").value;
    let resultat2 = document.querySelector("#resultat2");
    let phrase = "";
    let calcul2 = "";
    if (selecteur == "+") {
        phrase = "cette addition est : ";
        calcul2 = nombre11 + nombre22;
    } else if (selecteur == "-") {
        phrase = "cette soustraction est : ";
        calcul2 = nombre11 - nombre22;
    } else if (selecteur == "*") {
        phrase = "cette multiplication est : ";
        calcul2 = nombre11 * nombre22;
    } else if (selecteur == "/") {
        phrase = "cette division est : ";
        calcul2 = nombre11 / nombre22;
    }

    resultat2.innerHTML = "Le résultat de " + phrase + calcul2;
}


function validerFormulaire() {
    let ex3nom = document.querySelector("#ex3nom").value;
    let ex3prenom = document.querySelector("#ex3prenom").value;
    let ex3dateNaissance = document.querySelector("#ex3dateNaissance").value;
    let messageErreur = "";

    if (ex3nom == "") {
        messageErreur = "Le nom doit être renseigné" + "<br>"
    }
    if (ex3prenom == "") {
        messageErreur =  messageErreur + "Le prénom doit être renseigné" + "<br>"
    }
    if (ex3dateNaissance == "") {
        messageErreur = messageErreur + "La date de naissance doit être renseignée"
    }
    console.log(messageErreur)

    resultat3.innerHTML = messageErreur;
}


function initialiserDonnees() {
    // Déclaration des données JSON
    let data = {
        "polluant": "CO2",
        "unite": "milliards de tonnes",
        "annee": 2017,
        "pays": [
            {"nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn"},
            {"nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us"},
            {"nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in"},
            {"nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru"},
            {"nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp"},
            {"nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de"},
            {"nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr"},
            {"nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir"},
            {"nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca"}
        ]
    };

    // Modification du contenu de h1
    document.getElementById("titre").textContent = `${data.polluant} (${data.unite})`;

    // Modification du contenu de h2
    document.getElementById("annee").textContent = `Année : ${data.annee}`;

    /* // Exercice précédent
    // Modification du contenu de span avec la liste des pays
    let listePays = document.getElementById("listePays");
    let contenu = "<ul>";
    
    data.pays.forEach(pays => {
        contenu += `<li>${pays.nom} - ${pays.valeur} ${data.unite} (${pays.pourcentage}%)</li>`;
    });
    contenu += "</ul>";
    
    listePays.innerHTML = contenu;
    */

    // Modification du contenu du tbody avec la liste des pays
    let corpsTableau = document.getElementById("corps");
    let contenu = "";
    
    data.pays.forEach(pays => {
        contenu += `<tr>
                        <td><img src="https://flagcdn.com/24x18/${pays.code}.png" alt="${pays.nom}"> ${pays.nom}</td>
                        <td>${pays.valeur} ${data.unite}</td>
                        <td>${pays.pourcentage}%</td>
                    </tr>`;
    });
    
    corpsTableau.innerHTML = contenu;
}
