import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/reducer';

const docEle = document.documentElement;
const fn = function () {
  const width = window.innerWidth;
  width && (docEle.style.fontSize = 100 * (width / 1920) + "px");
};
window.onresize = fn;
window.addEventListener("orientationchange", fn, false);
document.addEventListener("DOMContentLoaded", fn, false);

const renden = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  )
}

renden(App)
