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
        const genre = this.formulaire.queryselector("input[name='genre']").value;
        const nom= this.formulaire.queryselector("input[name='nom']").value;
        const prenom= this.formulaire.queryselector("input[name='prenom']").value;
        const phoneTel= this.formulaire.queryselector("input[name='phoneTel']").value;
        const dateNaissance= this.formulaire.queryselector("input[name='dateNaissance']").value;
        const mail= this.formulaire.queryselector("input[name='mail']").value;

        const contact = new Contact(genre, nom, prenom, phoneTel, dateNaissance,mail);
        this.contacts.push(contact);
        this.afficher(contact);
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
        this.tableauHTMLResult.innerHTML = "";
        this.contacts.forEach(c => {
            this.tableauHTMLResult.innerHTML += `<tr>
            <td>${c.genre}</td>
            <td>${c.nom}</td>
            <td>${c.prenom}</td>
            <td>${c.phoneTel}</td>
            <td>${c.dateNaissance}</td>
            <td>${c.mail}</td>
            </tr>
            `;
        })
    }
}