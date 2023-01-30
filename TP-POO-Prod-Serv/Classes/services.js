import Article from "./Article.js";

export default class Services extends Article{
    constructor(titre, prix, description, domaine){
        super(titre, prix, description)
        this.domaine = domaine;
        

    }

    Display(){
        //console.log(this);
        return `${super.Display()+this.domaine}`;
    }

}
