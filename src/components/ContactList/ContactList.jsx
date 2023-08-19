import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ContactList;
