import Produits from "./produits.js";
import Services from "./services.js";

export default class Ihm {

constructor(formulaire, tableauHTMLResult1, tableauHTMLResult2) {
    this.products = [];
    this.serVices = [];
    this.formulaire = formulaire;
    this.tableauHTMLResult1 = tableauHTMLResult1;
    this.tableauHTMLResult2 = tableauHTMLResult2;
}

demarrer() {

      this.formulaire.addEventListener("submit", (e) => {
      e.preventDefault();
      const article0 = this.formulaire.querySelector("input[name='article']:checked").value
      //this.ajouter()
      if(article0 == "Produit"){
        //const inputDomaine = document.querySelector('#domain');
        //inputDomaine.style.display = "none";
        this.ajouterProd();
      }else if(article0 == "Service"){
        //const inputStok = document.querySelector('#stok');
        //inputStok.style.display = "none";
      this.ajouterServ();
      }
    });
  }

ajouterProd() {

    
    const titre = this.formulaire.querySelector("input[name='titre']").value;
    const description = this.formulaire.querySelector("input[name='description']").value;
    const prix = this.formulaire.querySelector("input[name='prix']").value;
    const stock = this.formulaire.querySelector("input[name='stock']").value;

    //const resetInput = this.formulaire.querySelectorAll('.form-control').value;

    const produit = new Produits(titre, description, prix, stock);
    this.products.push(produit);
    this.afficherProd(produit);
    //resetInput.innerHTML = "";
}

afficherProd(p) {

    this.tableauHTMLResult1.innerHTML += `<tr>
        <td>${p.titre}</td>
        <td>${p.description}</td>
        <td>${p.prix}</td>
        <td>${p.stock}</td>
        </tr>
        `;
  }

ajouterServ() {
    
    //const article = this.formulaire.querySelector("input[name='article']:checked").value
    const titre = this.formulaire.querySelector("input[name='titre']").value;
    const description = this.formulaire.querySelector("input[name='description']").value;
    const prix = this.formulaire.querySelector("input[name='prix']").value;
    const domaine = this.formulaire.querySelector(
      "input[name='domaine']"
    ).value;

    //const resetInput = this.formulaire.querySelectorAll('.form-control').value;
    const service = new Services(titre, description, prix, domaine);
    this.serVices.push(service);
    this.afficherServ(service);

}

afficherServ(s) {
    console.log(this.tableauHTMLResult2);
    this.tableauHTMLResult2.innerHTML += `<tr>
        <td>${s.titre}</td>
        <td>${s.description}</td>
        <td>${s.prix}</td>
        <td>${s.domaine}</td>
        </tr>
        `;
  }

}
