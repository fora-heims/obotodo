import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export function checkUserError({ user, error }) {
  if (error) {
    throw error;
  }
  return user;
}

export function checkTodoError({ data: { todos, error } }) {
  if (error) {
    throw error;
  }
  return todos;
}
