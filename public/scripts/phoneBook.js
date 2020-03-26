import { ContactForm } from "./contactForm.js";
import { ContactList } from "./contactList.js";

export class PhoneBook {
    constructor(wrapper, contacts) {
        this.wrapper = wrapper;
        this.contacts = contacts;
    }

    render() {
        this.wrapper.innerHTML = `
            <div class="phoneBook">
                <div class="contact-form-wrapper"></div>
                <div class="contact-list-wrapper"></div>
            </div>
        `;

        this.contactForm = new ContactForm (this.wrapper.querySelector('.contact-form-wrapper'), this.addContacts.bind(this));
        this.contactForm.render();

        this.contactList = new ContactList (this.wrapper.querySelector('.contact-list-wrapper'), this.contacts, this.deleteContactAtIndex.bind(this));
        this.contactList.render();
    }

    addContacts(contact){
        this.contacts.push(contact);

        console.log(this.contacts);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));

        this.contactList.updateContacts(this.contacts);
        this.contactList.render();
    }

    deleteContactAtIndex(index){
        this.contacts.splice(index, 1);//remove one item at specified index
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        this.contactList.render();
    }
}