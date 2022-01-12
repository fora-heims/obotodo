import './Header.css';
import classNames from 'classnames';
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

export default function Header({ user, type, setType, logout }) {
  return (
    <header>
      <BrowserRouter>
        {!user ? (
          <>
            <h2 className={classNames({ active: type === 'in' })} onClick={() => setType('in')}>
              Sign In
            </h2>
            <h2 className={classNames({ active: type === 'up' })} onClick={() => setType('up')}>
              Sign Up
            </h2>
          </>
        ) : (
          <>
            <NavLink to="/list">Todo List</NavLink>
            <h2 onClick={logout}>Sign Out</h2>
          </>
        )}
      </BrowserRouter>
    </header>
  );
}
