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
}) {
  return (
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
      <ul>
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
              <label>
                Delete Task:
                <button onClick={() => deleteT(todo.id)}>X</button>
              </label>
              <label>
                Update Task:
                <button onClick={() => updateTask(todo)}>X</button>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
