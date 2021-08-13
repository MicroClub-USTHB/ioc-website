import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// pages
import Landing from './pages/landing/Landing';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  )
}

export default App;
