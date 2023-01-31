export default class Vehicule {
    constructor(/*b, t, k, y,*/nP){
       /* this.brand = b;
        this.type = t;
        this.km = k
        this.year = y;*/
        this.numPlate = nP;
    }

    display(){
        return `"Plaque": ${this.numPlate}`;
        //console.log( `"Marque": ${this.brand} "Modèle": ${this.type} "Kilométrage": ${this.km}km "Année": ${this.year} "Plaque": ${this.numPlate} "Option": `);
    }
    
}