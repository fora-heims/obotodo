import './List.css';

import { useState, React, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Todo from '../../components/Todo/Todo';
import { addTodo, deleteTodo, getTodos } from '../../services/todos.js';

export default function List({ user, setUser }) {
  const [todos, setTodos] = useState([]);
  const [newt, setNewt] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <Header user={user} setUser={setUser} />
      <Todo
        todos={todos}
        setTodos={setTodos}
        newt={newt}
        setNewt={setNewt}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
