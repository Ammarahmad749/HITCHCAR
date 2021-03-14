import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Search from './Components/Search/Search';
import './index.css';
import { createBrowserHistory } from "history";


ReactDOM.render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>
  ,document.getElementById("root")
);

