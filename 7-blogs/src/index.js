import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// it will affect all requests sent from anywhere in the app
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    // edit request config
    return request;
  },
  (error) => {
    console.log(error);
    // forward the request to the component invoking axios
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
