import {Contact} from './contact.js';
import {PhoneBook} from './phoneBook.js';

// var john = new Contact ('John Cilliers', '1234 1234 1234', 'john.cilliers@yahoo.com');
// var jane = new Contact ('Annie Cilliers', '6789 8765 8907', 'anniec@gmail.com');

// const contacts = [ john, jane];
let contacts;
if (localStorage.getItem('contacts') !== null) {
    contacts = JSON.parse(localStorage.getItem('contacts')).map(item => new Contact(item.name, item.tel, item.email));//array of proper contact objects

} else {
    contacts = [];
}

const phoneBook = new PhoneBook(document.getElementById('root'), contacts);
phoneBook.render();