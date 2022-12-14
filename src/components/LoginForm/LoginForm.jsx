import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from 'components/LoginForm/LoginForm.module.css';
import { logIn } from 'redux/auth/operations';

export function LoginForm() {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
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
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form
      autoComplete="off"
      name="Login"
      className={css.form}
      onSubmit={handleSubmit}
    >
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
        Login
      </button>
    </form>
  );
}
