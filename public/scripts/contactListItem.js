export class ContactListItem {
    constructor(wrapper, contact, index, deleteContactAtIndex) {
        this.wrapper = wrapper;
        this.contact = contact;
        this.index = index;
        this.deleteContactAtIndex = deleteContactAtIndex;
    }

    render() {
        this.wrapper.innerHTML = `
            <div class="contact-list-item">
                <h4>
                    ${this.contact.name} &nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btn btn-danger btn-sm" data-index="${this.index}">Delete Contact</button>
                </h4>
                <div>${this.contact.tel}</div>
                <div>${this.contact.email}</div>
            </div>
        `;

        this.bindListeners();
    }

    bindListeners() {
        this.wrapper.querySelector('button').addEventListener('click', function() {
            //const buttOnClicked = this.wrapper.querySelector('button');
            const index = this.wrapper.querySelector('button').getAttribute('data-index');
            this.deleteContactAtIndex(index);

        }.bind(this));
    }
}