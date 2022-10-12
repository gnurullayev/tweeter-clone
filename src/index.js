import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginContext from './context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LoginContext>
        <App />
      </LoginContext>
    </Router>
  </React.StrictMode>
);

