function initialiserDonnees() {
    // Je crée l'objet req à partir de la classe XMLHttpRequest
    let req = new XMLHttpRequest();
    req.open('GET', 'https://restcountries.com/v2/all', true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.responseText);

            let corpsTableau = document.querySelector("#corps");
            let contenu = "";

            data.forEach(pays => {
                contenu += `<tr>
                                <td class="colonnePays"><img src="${pays.flags.svg}" width="50" alt="${pays.name}"> ${pays.name}</td>
                                <td class="colonneCapitale">${pays.capital ? pays.capital : "Inexistante"}</td>
                                <td class="colonnePopulation">${pays.population.toLocaleString()}</td>
                                <td class="colonneRegion">${pays.region}</td>
                            </tr>`;
            });

            corpsTableau.innerHTML = contenu;

            // Ajouter les écouteurs de clic pour le tri
            document.querySelector("#triAscPays").addEventListener("click", () => trierTableau(0, "asc"));
            document.querySelector("#triDescPays").addEventListener("click", () => trierTableau(0, "desc"));
            document.querySelector("#triAscCapitale").addEventListener("click", () => trierTableau(1, "asc"));
            document.querySelector("#triDescCapitale").addEventListener("click", () => trierTableau(1, "desc"));
            document.querySelector("#triAscNombre").addEventListener("click", () => trierTableau(2, "asc", true));
            document.querySelector("#triDescNombre").addEventListener("click", () => trierTableau(2, "desc", true));
            document.querySelector("#triAscRegion").addEventListener("click", () => trierTableau(3, "asc"));
            document.querySelector("#triDescRegion").addEventListener("click", () => trierTableau(3, "desc"));

            // Ajouter les écouteurs de clic pour le changement d'état des boutons
            document.querySelectorAll(".button").forEach(bouton => {
                bouton.addEventListener("click", function () {
                    changementEtatBouton(this); // 'this' représente le bouton cliqué
                });
            });
        }
    };

    req.send();
}

function trierTableau(indexColonne, ordre, estNombre = false) {
    let tbody = document.querySelector("#corps");
    let lignes = Array.from(tbody.querySelectorAll("tr"));

    lignes.sort((a, b) => {
        let valeurA = a.cells[indexColonne].textContent.trim();
        let valeurB = b.cells[indexColonne].textContent.trim();

        if (estNombre) {
            // Convertit en nombre (supprime les espaces et autres caractères non numériques)
            valeurA = parseInt(valeurA.replace(/\D/g, ""), 10) || 0;
            valeurB = parseInt(valeurB.replace(/\D/g, ""), 10) || 0;

            return ordre === "asc" ? valeurA - valeurB : valeurB - valeurA;
        } else {
            return ordre === "asc" ? valeurA.localeCompare(valeurB) : valeurB.localeCompare(valeurA);
        }
    });

    // Réinsérer les lignes triées
    tbody.innerHTML = "";
    lignes.forEach(ligne => tbody.appendChild(ligne));
}

function changementEtatBouton(boutonClique) {
    // Supprime la classe "active" de tous les boutons
    document.querySelectorAll(".button").forEach(bouton => {
        bouton.classList.remove("active");
    });

    // Ajoute la classe "active" uniquement au bouton cliqué
    boutonClique.classList.add("active");
}

// L'écouteur d'événements global au chargement du DOM
document.addEventListener("DOMContentLoaded", initialiserDonnees);
