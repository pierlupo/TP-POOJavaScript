import Vehicule from "./Classes/Vehicule.js";
import Car from "./Classes/Car.js";

const resultOutputTitle= document.querySelector('#title');
const resultOutputSubTitle= document.querySelector('#subTitle');
const resultOutput = document.querySelector("#result");

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

/* modal fin*/

let vehicules = new Array();


//let Car1 = new Car("Renault","Kangoo","240 000", "2003", "ZZ-123-BC", "climatisée")
let Car1 = new Car("ZZ-123-BC")
vehicules.push(Car1);
Car1.display();

for(let vehicule of vehicules){
    
    resultOutput.innerHTML += vehicule.display()+"<br>" ;
     console.log(vehicule.display());
 }
 