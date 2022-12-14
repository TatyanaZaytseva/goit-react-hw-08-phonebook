import React from 'react';
import { SlCallEnd } from 'react-icons/sl';
import css from 'pages/Home/Home.module.css';

export const Home = () => (
  <div className={css.container}>
    <h1 className={css.title}>
      Welcome to Contacts book <SlCallEnd />
    </h1>
  </div>
);
