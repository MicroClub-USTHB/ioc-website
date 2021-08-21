import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


// pages
import Landing from './pages/Landing/Landing';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import store from './redux/store';
import Challenges from './pages/Challenges/Challenges';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/challenges" component={Challenges} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
