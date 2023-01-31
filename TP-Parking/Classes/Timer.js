import Vehicule from "./Vehicule.js";

export default class Timer extends Vehicule {
    constructor(/*b,t,k,y,*/nP, t1, t2, t3, t4/*,c*/){
        super(/*b,t,k,y,*/nP)
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
        this.t4 = t4;
    }

    display() {
        return "<b>Voiture</b> : "+super.display()/*+this.option*/;
    }
}