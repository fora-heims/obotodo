import './Todo.css';

import React from 'react';

export default function Todo({
  todos,
  newt,
  setNewt,
  addT,
  deleteT,
  handleCheck,
  newTask,
  setNewTask,
  updateTask,
  update,
  user,
}) {
  return (
    <div>
      <ul>
        <h2>To Do List for {user.email}</h2>
        <div>
          <label>
            <input
              placeholder="enter a new task here"
              type="text"
              value={newt}
              onChange={(e) => setNewt(e.target.value)}
            />
          </label>
          <button onClick={() => addT(newt)}>Add Task</button>
        </div>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.is_complete} onChange={() => handleCheck(todo)} />
            {update === todo.id ? (
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                type="text"
                placeholder={todo.task}
              />
            ) : (
              <p>{todo.task}</p>
            )}
            <div>
              <button onClick={() => deleteT(todo.id)}>Delete</button>

              <button onClick={() => updateTask(todo)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
