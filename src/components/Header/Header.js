import './Header.css';
import classNames from 'classnames';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Header({ user, setUser, type, setType, logout }) {
  let history = useHistory();

  const logO = async () => {
    await logout();
    setUser(null);
    history.push('/');
  };

  const handleHome = () => {
    history.push('/');
    setType('home');
  };

  const handleTodo = () => {
    history.push('/list');
    setType('todo');
  };

  return (
    <header>
      <h3 className={classNames({ active: type === 'home' })} onClick={handleHome}>
        Home
      </h3>
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
          <h3 className={classNames({ active: type === 'todo' })} onClick={handleTodo}>
            Todo List
          </h3>
          <h3 onClick={logO}>Sign Out</h3>
        </>
      )}
    </header>
  );
}
