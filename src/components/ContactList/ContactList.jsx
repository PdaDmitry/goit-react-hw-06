import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact, selectContacts } from '../../redux/contactsSlice.js';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.contContList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
        </li>
      ))}
    </ul>
  );
}
