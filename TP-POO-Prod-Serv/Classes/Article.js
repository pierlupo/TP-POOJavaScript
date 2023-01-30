export default class Article {
    constructor(titre, prix, description){
        this.titre = titre;
        this.prix = prix;
        this.description = description;


    }

    Display(){
        return ` ${this.titre} ${this.prix} ${this.description} `
    }
}