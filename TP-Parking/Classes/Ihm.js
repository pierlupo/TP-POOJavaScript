import Vehicule from "./Vehicule.js";
import Car from "./Car.js";

export class Ihm {
    constructor(formulaire){
        this.plaques = []
        this.formulaire = formulaire
    }

    demarrer(){
            this.formulaire.addEventListener('submit', (e) => {
            e.preventDefault();

        })
    }


    ajouterPlaque(){
        const plaque = document.querySelector("#plaque").value;
        console.log(plaque);
        this.plaques.push(plaque);
        return 

    }

    /*payer(){
        const payer = document .querySelector('#button-addon2');
        payer.addEventListener("click", ()=> {
            return prixApayer;
        })
    }*/

    


}

const resultOutputTitle= document.querySelector('#title');
const resultOutputSubTitle= document.querySelector('#subTitle');
const resultOutput = document.querySelector("#result");
const resultOutput2 = document.querySelector("#result2")
resultOutputTitle.innerHTML = "TP POO - PARKING - Class Véhicule";
resultOutputSubTitle.innerHTML = "Création et utilisation des <b>Class</b> en <b>JavaScript</b>";

/* modal */

let modal = document.getElementById("myModal");
let btnmod = document.getElementById("myBtnmod");
let span = document.getElementsByClassName("close")[0];

if(btnmod){
btnmod.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
   
/*const disparition_btn = document.querySelector("#position_btn")

if (disparition_btn){disparition_btn.addEventListener("click", ()=>{
    
        disparition_btn.style.display ='none'
       
})} else {
        disparition_btn.style.display ='block'
}*/

    
/* modal fin*/

let plaques = new Array();
 
let Plaque1 = new Car("CC-456-DD")
plaques.push(Plaque1);
Plaque1.display();

 for(let plaque of plaques){
    
    resultOutput2.innerHTML = plaque.display() ;
    console.log(plaque.display());
 }


