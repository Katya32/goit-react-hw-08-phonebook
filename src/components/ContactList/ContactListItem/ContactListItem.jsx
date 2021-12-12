import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactOperation } from '../../../redux/phonebook/operations';
import { getVisibleContact } from '../../../redux/phonebook/selectors';
import { ReactComponent as DeleteIcon } from '../../../Icons/SVG/delete.svg';
import s from '../ContactList.module.css';

const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContact);

  const onDeleteContact = id => {
    dispatch(deleteContactOperation(id));
  };
  return contacts.map(({ name, number, id }) => {
    return (
      <li className={s.contact_item} key={id}>
        <p className={s.name}>{name}:</p>
        <p>{number}</p>
        <button className={s.delete_button} onClick={() => onDeleteContact(id)}>
          <DeleteIcon fill="rgb(245, 101, 221)" />
        </button>
      </li>
    );
  });
};
export default ContactListItem;
