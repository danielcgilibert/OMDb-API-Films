import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routers/AppRouter';
import './assets/main.css';
require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

