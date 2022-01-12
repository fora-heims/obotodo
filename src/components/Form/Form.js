import './Form.css';

import React from 'react';

export default function form() {
  return (
    <form>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="text" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
