import Vehicule from "./Vehicule.js";

export default class Car extends Vehicule {
    constructor(/*b,t,k,y,*/nP/*,c*/){
        super(/*b,t,k,y,*/nP)
       /* this.option = c*/
    }

    display() {
        return "<b>Voiture</b> : "+super.display()/*+this.option*/;
    }
}