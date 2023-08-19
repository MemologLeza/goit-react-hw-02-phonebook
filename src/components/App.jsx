import ContactList from './ContactList/ContactList';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <h1>Phonebook</h1> */}
      <ContactList />
      {/* <h2>Contacts</h2> */}
    </div>
  );
};
