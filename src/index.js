import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './HeaderComponent';
import Logos from './ImgComponent';
import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Logos />,
  document.getElementById('list_img')
)
