import Article from "./Article.js";
import Article from "./Article.js";


export default class Produits extends Article{
    constructor(titre, prix, description, stock){
        super(titre, prix, description)
        this.stock = stock;
        

    }

    Display(){
        //console.log(this);
        return `${super.Display()+this.stock}`;
    }

}