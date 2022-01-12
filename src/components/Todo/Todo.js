import './Todo.css';

import React from 'react';

export default function Todo({ todos, newt, setNewt, addTodo, deleteTodo }) {
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
      <button onClick={() => addTodo(newt)}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.is_complete} />
            <p>{todo.task}</p>
            <label>
              Delete Task:
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
