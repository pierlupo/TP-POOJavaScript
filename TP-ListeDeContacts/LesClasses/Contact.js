export default class Contact {
    constructor(sex, name, firstname, birthDate, tel, email){
        this.sex = sex;
        this.name = name;
        this.firstname = firstname;
        this.birthDate = birthDate;
        this.tel = tel;
        this.email = email;

    }

    Display(){
       return `${this.sex} ${this.name} ${this.firstname} ${this.birthDate} ${this.tel} ${this.email}. `;
    }
    
}