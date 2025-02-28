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