import ContactForm from '../ContactForm/ContactForm';
import ContactItem from '../ContactItem/ContactItem';
import { Component } from 'react';
import { nanoid } from 'nanoid';
class ContactList extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    if (this.isDuplicate(data.name))
      return alert(`${data.name} is already in contacts(( `);
    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };
  isDuplicate = name =>
    this.state.contacts.find(contact => contact.name === name);
  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <div>
        <ContactForm createContact={this.createContact} />
        <div>
          <ul>
            {this.state.contacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default ContactList;
