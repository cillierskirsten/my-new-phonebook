import {Contact} from './contact.js';

export class ContactForm {
    constructor(wrapper, addContact) {
        this.wrapper = wrapper;
        this.addContact = addContact;
    }

    render() {
        this.wrapper.innerHTML = `
            <div class="contact-form">
                <form>
                    <div class="form-group">
                      <label for="name">Full Name</label>
                      <input type="text" name="name" id="name" class="form-control" placeholder="Please eneter your Full Name." aria-describedby="helpId" />
                    </div>
                    <div class="form-row">
                        <div class="form-group halfWidth">
                        <label for="phone">Contact Number</label>
                        <input type="tel" name="phone" id="phone" class="form-control" placeholder="+61 400 000 000" aria-describedby="helpId" />
                        </div>
                        <div class="form-group halfWidth">
                        <label for="email">Email Address</label>
                        <input type="email" name="email" id="email" class="form-control" placeholder="Please enter your Full Name." aria-describedby="helpId" />
                        </div>
                    </div>
                    <div class="form-group">
                      <input type="submit" class="btn btn-primary" />
                    </div>
                </form>
            </div>
        `;

        this.bindListeners();
    }

    bindListeners(){
        this.wrapper.querySelector('form').addEventListener('submit', function(even){
            event.preventDefault();

            const name = this.wrapper.querySelector('#name').value;
            const phone = this.wrapper.querySelector('#phone').value;
            const email = this.wrapper.querySelector('#email').value;

            const contact = new Contact(name, phone, email);

            this.addContact(contact);
        }.bind(this));
    }
}