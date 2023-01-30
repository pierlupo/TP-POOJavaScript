import  Ihm  from "./Classes/Ihm.js";



const form = document.querySelector('#formContact');
const result = document.querySelector('#result');
const result1 = document.querySelector('#result1');
const ihm = new Ihm(form, result, result1);

ihm.demarrer();