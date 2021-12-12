import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactsPage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />

      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
