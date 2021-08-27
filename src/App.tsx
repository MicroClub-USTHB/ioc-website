import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
        <Route path={['/signin', '/login', '/connexion']} exact render={(props) => !localStorage.getItem('Authorization') ? <Signin {...props} /> : <Redirect to="/challenges" />} />
        <Route path={['/signup', '/register', '/inscrire']} exact render={(props) => !localStorage.getItem('Authorization') ? <Signup {...props}/> : <Redirect to="/challenges" />} />
        <Route path={['/challenges', '/defis']} render={(props) => localStorage.getItem('Authorization') ? <Challenges {...props} /> : <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default App;
