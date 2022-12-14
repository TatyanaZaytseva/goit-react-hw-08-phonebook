import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/slices/filterSlice';
import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const inputID = nanoid();

  return (
    <section className={css.section_filter}>
      <label htmlFor={inputID} className={css.label}>
        Find contacts by name:
        <input
          id={inputID}
          type="text"
          value={filter}
          name="filter"
          onChange={e => dispatch(setFilter(e.target.value))}
          className={css.input}
        ></input>
      </label>
    </section>
  );
};
