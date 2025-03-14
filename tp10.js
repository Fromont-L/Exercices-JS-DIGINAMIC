document.addEventListener("DOMContentLoaded", function() {
    initialiserDonnees();

    // Attache l'événement une seule fois après le chargement de la page
    document.getElementById("btnFiltrer").addEventListener("click", function(event) {
        event.preventDefault();  // Empêche la soumission du formulaire
        filtrerPollution();
    });
});

function initialiserDonnees() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://digicode.cleverapps.io/json/pays/pollution', true);

    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            let data = JSON.parse(req.responseText);
            afficherPays(data.pays, data.unite);
        }
    };

    req.send();
}

function afficherPays(paysListe, unite) {
    let corpsTableau = document.querySelector("#corps");
    let contenu = "";

    paysListe.forEach(pays => {
        contenu += `<tr>
                        <td><img src="https://flagcdn.com/24x18/${pays.code}.png" alt="${pays.nom}"> ${pays.nom}</td>
                        <td>${pays.valeur} ${unite}</td>
                        <td>${pays.pourcentage}%</td>
                    </tr>`;
    });

    corpsTableau.innerHTML = contenu;
}

function filtrerPollution() {
    let min = document.querySelector("#min").value;
    let max = document.querySelector("#max").value;

    min = min === "" ? 0 : parseFloat(min);
    max = max === "" ? Number.MAX_VALUE : parseFloat(max);

    // Vérification des valeurs saisies
    if (min < 0 || max < 0) {
        alert("Veuillez entrer des valeurs positives.");
        return;
    }
    if (min > max) {
        alert("Le MIN ne peut pas être supérieur au MAX.");
        return;
    }

    // Récupération des données et filtrage
    let req = new XMLHttpRequest();
    req.open('GET', 'https://digicode.cleverapps.io/json/pays/pollution', true);

    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            let data = JSON.parse(req.responseText);
            let paysFiltres = data.pays.filter(pays => pays.valeur >= min && pays.valeur <= max);
            afficherPays(paysFiltres, data.unite);
        }
    };

    req.send();
}
