import { Ihm } from "./LesClasses/ihm.js";



const form = document.querySelector('#formContact');
const result = document.querySelector('#result');

const ihm = new Ihm(form, result);

ihm.demarrer();