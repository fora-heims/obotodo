import { client, checkError } from './client.js';

export async function getTodos() {
  const response = await client.from('todos').select('*');
  return checkError(response);
}

export async function addTodo(task) {
  const response = await client
    .from('todos')
    .insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(response);
}

export async function deleteTodo(id) {
  const response = await client.from('todos').delete().eq('id', id);
  return checkError(response);
}

export async function toggleCompleted(id, isComplete) {
  const response = await client.from('todos').update({ is_complete: isComplete }).match({ id });
  return checkError(response);
}

export async function alterTask(id, task) {
  const response = await client.from('todos').update({ task: task }).match({ id });
  return checkError(response);
}
