import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ path, user, children, ...rest }) {
  return (
    <Route path={path} {...rest} render={() => (user ? { ...children } : <Redirect to="/" />)} />
  );
}
