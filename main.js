import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
  <App baseUrl={'http://localhost:####/api.rsc'} user={'username'} pass={'password'} />, 
  document.getElementById('app')
);