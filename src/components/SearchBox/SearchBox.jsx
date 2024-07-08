import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  const findId = useId();

  const handleChange = evt => {
    onFilter(evt.target.value);
  };

  return (
    <div className={css.contFilter}>
      <label htmlFor={findId}>Find contacts by name</label>
      <input
        className={css.inpFilter}
        type="text"
        id={findId}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
