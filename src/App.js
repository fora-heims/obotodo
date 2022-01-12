import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Auth from './Views/Auth/Auth.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
