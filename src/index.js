import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const renden = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById("root")
  )
}

renden(App)
