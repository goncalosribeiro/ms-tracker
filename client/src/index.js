import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Store from './store/store';

ReactDOM.render(
  <Store>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Store>,
  document.getElementById('root')
);
