import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// pages
import Landing from './pages/landing/Landing';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  )
}

export default App;
