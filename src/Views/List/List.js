import './List.css';

import { useState, React, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Todo from '../../components/Todo/Todo';
import { addTodo, deleteTodo, getTodos, toggleCompleted, alterTask } from '../../services/todos.js';
import { logout } from '../../services/users';

export default function List({ user, setUser }) {
  const [todos, setTodos] = useState([]);
  const [newt, setNewt] = useState('');
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState('');
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getTodos();
      setTodos(data);
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const handleCheck = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);

    // option 1
    const newTodos = todos.map((todo) =>
      task.id === todo.id ? { ...task, is_complete: !task.is_complete } : todo
    );
    setTodos(newTodos);

    // option 2
    // const newTs = await getTodos();
    // setTodos(newTs);
  };

  const deleteT = async (id) => {
    await deleteTodo(id);
    const newTodos = todos.filter((todo) => id !== todo.id);
    setTodos(newTodos);
  };

  const addT = async (newt) => {
    await addTodo(newt);
    const newTodos = await getTodos();
    setTodos(newTodos);
    setNewt('');
  };

  const updateTask = async (task) => {
    if (update === task.id) {
      if (newTask.length < 4) {
        setUpdate(0);
        return;
      }
      await alterTask(task.id, newTask);
      const newTodos = todos.map((todo) =>
        task.id === todo.id ? { ...task, task: newTask } : todo
      );
      setTodos(newTodos);
      setUpdate(0);
      setNewTask('');
    } else {
      setUpdate(task.id);
    }
  };

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <Header user={user} setUser={setUser} logout={logout} />
      {loading ? (
        <div>...Loading</div>
      ) : (
        <Todo
          user={user}
          todos={todos}
          setTodos={setTodos}
          newt={newt}
          setNewt={setNewt}
          addT={addT}
          deleteT={deleteT}
          handleCheck={handleCheck}
          newTask={newTask}
          setNewTask={setNewTask}
          updateTask={updateTask}
          update={update}
        />
      )}
    </>
  );
}
