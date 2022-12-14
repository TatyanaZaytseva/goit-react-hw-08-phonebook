import React from 'react';
import { SlCallEnd } from 'react-icons/sl';

import css from 'pages/Home/Home.module.css';

const Home = () => (
  <div className={css.container}>
    <h1 className={css.title}>
      Welcome to phonebook <SlCallEnd />
    </h1>
  </div>
);

export default Home;
