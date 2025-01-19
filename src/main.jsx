import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/shopcontext';

ReactDOM.render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);