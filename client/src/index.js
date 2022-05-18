import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/store"
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <Router>
      <BrowserRouter>
       <App />
    </BrowserRouter>
    </Router>
         
   
    </Provider>
  
  </React.StrictMode>
);
