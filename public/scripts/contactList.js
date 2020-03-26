import {ContactListItem} from './contactListItem.js';
export class ContactList {
    constructor(wrapper, contacts, deleteContactAtIndex) {
        this.wrapper = wrapper;
        this.contacts = contacts;
        this.deleteContactAtIndex = deleteContactAtIndex;
        this.contactListItems = [];
    }

    render() {
        this.wrapper.innerHTML = `
            <div class="contact-list">
                <h2>Contacts</h2>
                <hr />
                <ol class="contact-list-items">
                      
                </ol>
            </div>
        `;

        this.renderContacts();
    }

    updateContacts(contacts) {
        this.contacts = contacts;        
    }

    renderContacts() {
        const contactList = this.wrapper.querySelector('.contact-list-items');

        this.contacts.forEach(function(contact, index){
            const wrapper = document.createElement('li');

            wrapper.classList.add('contact-list-item-wrapper');
            contactList.appendChild(wrapper);

            const contactListItem = new ContactListItem(wrapper, contact, index, this.deleteContactAtIndex);
            this.contactListItems.push(contactListItem);
            contactListItem.render();
        }.bind(this));
    }
}