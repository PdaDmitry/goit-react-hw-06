import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsSlice.js';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

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
