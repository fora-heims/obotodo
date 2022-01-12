import './List.css';

import { useState, React } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Todo from '../../components/Todo/Todo';

export default function List({ user }) {
  const [todos, setTodos] = useState([]);
  const [newt, setNewt] = useState('');
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <Header user={user} />
      <Todo todos={todos} setTodos={setTodos} newt={newt} setNewt={setNewt} />
    </>
  );
}
