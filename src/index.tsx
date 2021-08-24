import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';

axios.defaults.baseURL = 'https://ioc-backend.herokuapp.com';
// axios.defaults.baseURL = 'localhost:4242';
if (localStorage.getItem('Authorization') !== undefined) {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);