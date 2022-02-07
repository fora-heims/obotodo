import { client, checkError, checkUserError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });
  return checkUserError(response);
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });
  return checkUserError(response);
}

export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}
