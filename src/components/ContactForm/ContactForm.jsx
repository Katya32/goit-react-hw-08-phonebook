import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactOperation } from '../../redux/phonebook/operations';
import { getItemsSelector } from '../../redux/phonebook/selectors';
import { ReactComponent as ContactBook } from '../../Icons/SVG/address-book.svg';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsFromState = useSelector(getItemsSelector);
  const dispatch = useDispatch();

  const handleValueChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const data = { name, number };
    const contactsName = contactsFromState.map(contact => contact.name);
    if (!contactsName.includes(data.name)) {
      dispatch(addContactOperation(data));
    } else {
      alert(`${data.name} is already in contacts`);
    }
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.input_contact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleValueChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleValueChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.add_button} type="submit">
        Add contact
        <ContactBook className={s.phonebook_icon} />
      </button>
    </form>
  );
};

export default ContactForm;
