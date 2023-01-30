export default class Contact {
    constructor(genre, nom, prenom, dateNaissance, phoneTel, mail){
        this.genre = genre;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.phoneTel = phoneTel;
        this.mail = mail;

    }

    Display(){
       return `${this.genre} ${this.nom} ${this.prenom} ${this.dateNaissance} ${this.phoneTel} ${this.mail}. `;
    }
    /*getter et setter */
    // set nom(n){
    //     this.nom = n;
    // }
    // get nom(){
    // return this.nom; 
    // }
}

