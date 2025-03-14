// METHODE 1

class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Permet de créer un shadow DOM pour l'instant vide

        // Création bouton
        const button = document.createElement('button');
        button.textContent = "Cliquez !"

        this.shadowRoot.appendChild(button);


    }
}

customElements.define('my-button', MyButton);



// METHODE 2

class MyButton2 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback(){
        const button = document.createElement('button');
        button.textContent = 'Cliquez !!';
        this.shadowRoot.appendChild(button);
    }
}
customElements.define('my-button-2', MyButton2);


// METHODE 3

function chargerDonnees() {
    // let btn = document.querySelector("#btn1");
    // btn.setAttribute("label", "Autre chose");
    btn.updateColor("#000000")
}


class MyButton3 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observerAttributes() {
        return ['label'];
    }


    connectedCallback() {
        let label = this.getAttribute("label") || "S'affiche si label vide";

        // Cela ne permet pas de modifier le libellé dynamiquement après que le bouton ait été ajouté dans le DOM
        this.shadowRoot.innerHTML = `
        <style> input {
            background-color : blue;
            color : white; }"
        </style>
        <input type="button" value="${label}">
        </input>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {

        if (name === 'label') {
            const button = this.shadowRoot.querySelector("input");
            if (button) {
                button.value = newValue;
            }  
        }   
    } 

    updateColor(color) {
        const button = this.shadowRoot.querySelector('input');
        if (button) {
            button.style.color = color;
        }
    }
}

// Les balises custom doivent posséder un tiret "-" pour les distinguer des tags officiels du HTML
customElements.define('my-button-3', MyButton3);

