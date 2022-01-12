import './Form.css';

import React from 'react';

export default function form({ email, password, setEmail, setPassword, message, submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <p>{message}</p>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
