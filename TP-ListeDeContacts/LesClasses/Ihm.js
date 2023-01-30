import Contact from "./Contact.js";

export class Ihm {
    constructor(formulaire,tableauHTMLResult){
        this.contacts = [];
        this.formulaire = formulaire;
        this.tableauHTMLResult = tableauHTMLResult;
    }
        //les méthodes nécessaires:

    demarrer(){
        this.formulaire.addEventListener("submit", (e) => {
            e.preventDefault();
            this.ajouter();
        })
    }

    ajouter() {
        //Récupérer les champs et créer un contact:
        const genre = this.formulaire.querySelector("input[name='genre']:checked").value;
        const nom= this.formulaire.querySelector("input[name='nom']").value;
        const prenom= this.formulaire.querySelector("input[name='prenom']").value;
        const phoneTel= this.formulaire.querySelector("input[name='phoneTel']").value;
        const dateNaissance= this.formulaire.querySelector("input[name='dateNaissance']").value;
        const mail= this.formulaire.querySelector("input[name='mail']").value;
        //const resetInput = this.formulaire.querySelectorAll('.form-control').value;

        const contact = new Contact(genre, nom, prenom, phoneTel, dateNaissance,mail);
        this.contacts.push(contact);
        this.afficher(contact);
        //resetInput.innerHTML = "";
        
    }

    afficher(c){
        //ajouter un contact à l'affichage html
        this.tableauHTMLResult.innerHTML += `<tr>
        <td>${c.genre}</td>
        <td>${c.nom}</td>
        <td>${c.prenom}</td>
        <td>${c.phoneTel}</td>
        <td>${c.dateNaissance}</td>
        <td>${c.mail}</td>
        </tr>
        `;

        //this.contacts = [];
        // this.tableauHTMLResult.innerHTML = "";
        // this.contacts.forEach(c => {
        //     this.tableauHTMLResult.innerHTML += `<tr>
        //     <td>${c.genre}</td>
        //     <td>${c.nom}</td>
        //     <td>${c.prenom}</td>
        //     <td>${c.phoneTel}</td>
        //     <td>${c.dateNaissance}</td>
        //     <td>${c.mail}</td>
        //     </tr>
        //     `;
        // })
    }
}