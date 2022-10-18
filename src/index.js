import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import LoginContext from './context/LoginContext';
import {storeCreate } from './redux/store';

const store = storeCreate
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
     <Provider store={store}>
        <LoginContext>
          <App />
        </LoginContext>
     </Provider>
    </Router>
  </React.StrictMode>
);

