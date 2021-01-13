import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// set the general headers for all types of requests
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// set headers for the POST requests
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
