import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contContact}>
      <div>
        <p>
          <FaUser className={css.iconUser} size={14} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.iconPhone} size={14} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
