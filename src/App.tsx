import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


// pages
import Landing from './pages/Landing/Landing';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Challenges from './pages/Challenges/Challenges';
import { useReAuthenticateQuery } from './redux/api/backend';

const App: React.FC = () => {
  useReAuthenticateQuery(null, {
    pollingInterval: 15 * 60 * 1000
  })
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/login" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/register" exact component={Signup} />
        <Route path="/challenges" component={Challenges} />
      </Switch>
    </Router>
  )
}

export default App;
