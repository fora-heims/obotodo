import { client, checkTodoError } from './client.js';

export function getTodos() {
  const response = client.from('todos').select('*');
  console.log(response);
  return checkTodoError(response);
}

export async function addTodo(task) {
  const response = await client
    .from('todos')
    .insert([{ task: task, user_id: client.auth.user().id }]);
  return checkTodoError(response);
}

export async function deleteTodo(id) {
  const response = await client.from('todos').delete().eq('id', id);
  return checkTodoError(response);
}
