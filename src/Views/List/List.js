import './List.css';

import { useState, React, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Todo from '../../components/Todo/Todo';
import { addTodo, deleteTodo, getTodos, toggleCompleted } from '../../services/todos.js';

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

  const handleCheck = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);
    // two options - fetch all todos, or loop through to
    const newTodos = todos.map((todo) =>
      task.id === todo.id ? { ...task, is_complete: !task.is_complete } : todo
    );
    setTodos(newTodos);
  };

  const deleteT = async (id) => {
    await deleteTodo(id);
    // two options - fetch all todos, or loop through to
    const newTodos = todos.filter((todo) => id !== todo.id);
    setTodos(newTodos);
  };

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
        deleteT={deleteT}
        handleCheck={handleCheck}
      />
    </>
  );
}
