import  Ihm  from "./Classes/Ihm.js";



const form = document.querySelector('#formContact');
const result = document.querySelector('#result');
const result1 = document.querySelector('#result1');
let article0 = document.querySelector("input[name='article']:checked").value;
let article1 = document.getElementsById('parentRadio');
const inputDomaine = document.querySelector('#domain');
const inputStok = document.querySelector('#stok');
// const ihmProd = new Ihm(form, result);
// const ihmServ = new Ihm(form, result1);

this.formulaire.addEvenListener("change", ()=>{

    if(article0 == "Produit") {

        inputDomaine.style.display = "none";
        
        } else if (article0 == "Service") {
        
        inputStok.style.display = "none";
        
        }
})


const ihm = new Ihm(form, result, result1);
// ihmProd.demarrer();
// ihmServ.demarrer();

ihm.demarrer();