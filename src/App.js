import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Auth from './Views/Auth/Auth.js';
import { useState } from 'react';
import { getUser } from './services/users.js';
import List from './Views/List/List.js';
import ProtectedRoute from './utils/ProtectedRoute.js';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/list" user={user}>
            <List user={user} setUser={setUser} />
          </ProtectedRoute>
          <Route exact path="/">
            <Auth user={user} setUser={setUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
