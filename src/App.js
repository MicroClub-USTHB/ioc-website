import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Style
import './App.css';

// Pages
import Landing from './pages/Landing/Landing';
import Signup from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/register" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
