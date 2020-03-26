export class Contact {
    constructor(name, tel, email){
        this.name = name;
        this.tel = tel;
        this.email = email;
    }
    display() {
        console.log(`${this.name} : ${this.tel}`);
    }

};
