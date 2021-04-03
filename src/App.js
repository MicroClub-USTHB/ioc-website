import logo from './logo.svg';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// Style
import './App.css';

// Pages
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Workspace from './pages/Workspace/Workspace';


// Firebase
import firebase from 'firebase/app';
// import 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useSelector } from 'react-redux';
import Lounge from './pages/Lounge/Lounge';
// import { setUser } from './redux/workspaceSlice';


firebase.initializeApp({
    apiKey: "AIzaSyCYRJmCgAW1Xd_GsywHyi6dbgCUg5AaAmc",
    authDomain: "ioc-website.firebaseapp.com",
    projectId: "ioc-website",
    storageBucket: "ioc-website.appspot.com",
    messagingSenderId: "1022206627398",
    appId: "1:1022206627398:web:f8b46585cdcf1aaef44447",
    measurementId: "G-HP19NWQDXW"
});



function App() {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.workspace.user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/register" exact render={() => user? (<Redirect to="/workspace" />) : (<Register />)} />
          <Route path="/login" exact render={() => (user? (<Redirect to="/workspace" />) : (<Login />))} />
          <Route path="/workspace" component={Workspace} />
          <Route path="/lounge" component={Lounge} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
