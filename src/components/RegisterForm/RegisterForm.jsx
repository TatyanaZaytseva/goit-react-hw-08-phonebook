import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from 'components/RegisterForm/RegisterForm.module.css';
import { register } from 'redux/auth/operations';

export function RegisterForm() {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form
      autoComplete="off"
      name="Registration"
      className={css.form}
      onSubmit={handleSubmit}
    >
      <label htmlFor={nameInputId} className={css.label}>
        Name <br />
        <input
          type="text"
          name="name"
          id={nameInputId}
          required
          className={css.input}
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor={emailInputId} className={css.label}>
        Email <br />
        <input
          type="email"
          name="email"
          id={emailInputId}
          required
          className={css.input}
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor={passwordInputId} className={css.label}>
        Password <br />
        <input
          type="password"
          name="password"
          id={passwordInputId}
          required
          className={css.input}
          value={password}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit" className={css.button}>
        Registration
      </button>
    </form>
  );
}
