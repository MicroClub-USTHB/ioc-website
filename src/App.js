import React, { useEffect } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { debounce } from 'debounce';

// Style
import './App.css';

// Pages
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Workspace from './pages/Workspace/Workspace';

// Firebase
import firebase from 'firebase/app';
import 'firebase/database';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import Lounge from './pages/Lounge/Lounge';
import { sessionStart, setLeaderboard, setIsMobile } from './redux/workspaceSlice';

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
  const user = useSelector(state => state.workspace.user);
  const loadingUser = useSelector(state => state.workspace.loadingUser);
  const isMobile = useSelector(state => state.workspace.isMobile);
  const dispatch = useDispatch();

  
  
  useEffect(() => {
    if (localStorage.uid && !user && !loadingUser) {
      dispatch(sessionStart(localStorage.uid))
    }
    
    // Window resizer
    const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
    if (!isMobile) {
      console.log('ran');
      console.log(viewportWidth);
      if (viewportWidth<=500) {
        console.log('rany');
        dispatch(setIsMobile(true));
      }
    }
    const handleWindowResize = () => {
      if (document.documentElement.clientWidth <= 500 && !isMobile) {
        dispatch(setIsMobile(true));
      } else if(document.documentElement.clientWidth > 500 && isMobile) {
        dispatch(setIsMobile(false));
      }
    }
    window.addEventListener('resize', debounce(handleWindowResize, 300));
    // listening on leaderboard changes
    if (user) {
      let unsubscribe = firebase.firestore().collection('leaderboard').onSnapshot(snapshot => {
        const leaderboardData = snapshot.docs.map(item => {
          return item.data();
        })
        // sorting
        leaderboardData.sort(( a, b ) => -(a.score - b.score));
        dispatch(setLeaderboard(leaderboardData));
      })
      return () => {
        window.removeEventListener('resize', debounce(handleWindowResize, 300));
        unsubscribe();
      }
    }
    return () => {
      window.removeEventListener('resize', debounce(handleWindowResize, 300));
    };
  }, [dispatch, isMobile, user, loadingUser]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/register" exact render={() => (user && user.userDB)? (<Redirect to="/workspace" />) : (<Register />)} />
          <Route path="/login" exact render={() => (user && user.userDB)? (<Redirect to="/workspace" />) : (<Login />)} />
          <Route path="/workspace" render={() => (user && user.userDB)? <Workspace /> : <Redirect to="/" />} />
          <Route path="/lounge" render={() => (user && user.userDB)? <Lounge /> : <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
