import './Header.css';
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ user, type, setType, logout }) {
  return (
    <header>
      {!user ? (
        <>
          <h3 className={classNames({ active: type === 'in' })} onClick={() => setType('in')}>
            Sign In
          </h3>
          <h3 className={classNames({ active: type === 'up' })} onClick={() => setType('up')}>
            Sign Up
          </h3>
        </>
      ) : (
        <>
          <NavLink to="/list">Todo List</NavLink>
          <h3 onClick={logout}>Sign Out</h3>
        </>
      )}
    </header>
  );
}
