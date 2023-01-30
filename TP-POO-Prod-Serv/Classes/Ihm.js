import Produits from "./produits.js";
import Services from "./services.js";

export default class Ihm {
    constructor(formulaire,tableauHTMLResult1,tableauHTMLResult2 ){
        this.products = [];
        this.serVices = [];
        this.formulaire = formulaire;
        this.tableauHTMLResult1 = tableauHTMLResult1;
        this.tableauHTMLResult2 = tableauHTMLResult2;
    }

    demarrer(){
        this.formulaire.addEventListener("submit", (e) => {
            e.preventDefault();
            this.ajouter();
        })
    }

    ajouter() {
        //Récupérer les champs et créer un contact:
        const titre = this.formulaire.querySelector("input[name='titre']").value;
        const description= this.formulaire.querySelector("input[name='description']").value;
        const prix= this.formulaire.querySelector("input[name='prix']").value;
        const stock= this.formulaire.querySelector("input[name='stock']").value;
        const domaine= this.formulaire.querySelector("input[name='domaine']").value;
        
        //const resetInput = this.formulaire.querySelectorAll('.form-control').value;

        const produit = new Produits(titre, description, prix, stock);
        this.products.push(produit);
        this.afficher(produit);
        //resetInput.innerHTML = "";

        const service = new Services(titre, description, prix, domaine);
        this.serVices.push(service);
        this.afficher(service);
        
    }

    afficher(p){
        //ajouter un contact à l'affichage html
        this.tableauHTMLResult1.innerHTML += `<tr>
        <td>${p.titre}</td>
        <td>${p.description}</td>
        <td>${p.prix}</td>
        <td>${p.stock}</td>
        </tr>
        `;
    }
    
    afficher(s){
            //ajouter un contact à l'affichage html
            this.tableauHTMLResult2.innerHTML += `<tr>
            <td>${s.titre}</td>
            <td>${s.description}</td>
            <td>${s.prix}</td>
            <td>${s.domaine}</td>
            </tr>
            `;
        }
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

    /*getter et setter */
    // set nom(n){
    //     this.nom = n;
    // }
    // get nom(){
    // return this.nom; 
    // }


    

