import './Header.css';
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header({ user, setUser, type, setType, logout }) {
  let history = useHistory();

  const logO = () => {
    logout();
    setUser(null);
    history.push('/');
  };

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
          <h3 onClick={logO}>Sign Out</h3>
        </>
      )}
    </header>
  );
}
