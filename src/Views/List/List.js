import './List.css';

import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function List({ user }) {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <Header user={user} />
        <ul>
          <li>This</li>
          <li>is</li>
          <li>a</li>
          <li>list</li>
        </ul>
      </BrowserRouter>
    </>
  );
}
