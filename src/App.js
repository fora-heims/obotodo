import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Auth from './Views/Auth/Auth.js';
import { useState } from 'react';
import { getUser } from './services/users.js';
import List from './Views/List/List';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/list">
            <List user={user} />
          </Route>
          <Route exact path="/">
            <Auth user={user} setUser={setUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
