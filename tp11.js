const idCreateur = "lucasfromont";

// Fonction pour récupérer les utilisateurs depuis l'API
function getUtilisateurs() {
    let req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:3000/utilisateur/');

    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            let data = JSON.parse(req.responseText);
            console.log(data);
            afficherUtilisateurs(data);
            
        }
    };
    req.send();
}

// Fonction pour afficher les utilisateurs dans le tableau
function afficherUtilisateurs(listeUtilisateurs) {
    let tbody = document.getElementById("corps");
    tbody.innerHTML = "";

    listeUtilisateurs.forEach(utilisateur => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${utilisateur.dateMaj}</td>
            <td>${utilisateur.nom}</td>
            <td>${utilisateur.prenom}</td>
            <td>${utilisateur.genre}</td>
            <td>${utilisateur.dateNaissance}</td>
            <td>${utilisateur.lieuNaissance}</td>
            <td>${utilisateur.departementNaissance}</td>
            <td>${utilisateur.numeroRue}</td>
            <td>${utilisateur.libelleRue}</td>
            <td>${utilisateur.codePostal}</td>
            <td>${utilisateur.ville}</td>
            <td>
                <button class="btn btn-danger" onclick="confirmerModification('${utilisateur.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">M</button>
                <button class="btn btn-danger" onclick="confirmerSuppression('${utilisateur.id}')">🗑</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Fonction pour créer un utilisateur via l'API
function postUtilisateur(utilisateur) {
    utilisateur.idCreateur = idCreateur;
    utilisateur.dateMaj = new Date().toLocaleString();
    console.log(utilisateur);

    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(utilisateur)
        };
        fetch('http://localhost:3000/utilisateur/', requestOptions)
        .then(res => res.text())
        .then(text => console.log(text));
        getUtilisateurs();
    } catch (error) {
        alert("Erreur lors de la création de l'utilisateur: " + error.message);
    }
}

// TEST
// function postUtilisateur() {
//     let objet = {};
//     form = document.querySelector('form');
//     const formData = new FormData(form);
//     formData.forEach((value, key) => objet[key] = value);
//     fetch('https://digicode.cleverapps.io/utilisateurs/'), {
//         method: "POST",
//         headers: { "Content-Type" : "application/json" },
//         body: JSON.stringify(objet)
//     }
// }


// Fonction pour supprimer un utilisateur via l'API
function deleteUtilisateur(id) {
    try {
        fetch(`http://localhost:3000/utilisateur/${id}`, { method: "DELETE" })
        .then(getUtilisateurs);
    } catch (error) {
        alert("Erreur lors de la suppression de l'utilisateur: " + error.message);
    }
}

// Confirmation avant suppression d'un utilisateur
function confirmerSuppression(id) {
    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
        deleteUtilisateur(id);
    }
}

// Fonction pour soumettre le formulaire d'ajout d'utilisateur
function soumettreFormulaire() {
    const utilisateur = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        genre: document.getElementById('genre').value,
        dateNaissance: document.getElementById("dateNaissance").value,
        lieuNaissance: document.getElementById("lieuNaissance").value,
        departementNaissance: document.getElementById("departementNaissance").value,
        numeroRue: document.getElementById("numeroRue").value,
        libelleRue: document.getElementById("libelleRue").value,
        codePostal: document.getElementById("codePostal").value,
        ville: document.getElementById("ville").value
    };

    postUtilisateur(utilisateur);
}

// Fonction pour modifier un utilisateur
function confirmerModification(id) {
    const utilisateur = getUtilisateurById(id);
    console.log("Utilisateur à modifier:", utilisateur);
}

// Fonction pour récupérer un utilisateur par ID
function getUtilisateurById(id) {
    try {
        const response = fetch(`http://localhost:3000/utilisateur/${id}`);
        const utilisateur = response.json();
        return utilisateur;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur:", error);
    }
}

// Soumettre le formulaire d'ajout
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    soumettreFormulaire();
});
