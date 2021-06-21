import React from 'react';
import { BrowserRouter } from "react-router-dom";//引入routerdom
import { CONTEXT } from './config/env';
import Router from "./router/router"; //引入路由管理js
import './App.css';
import Footed from './component/Footed';

export class App extends React.Component {
  componentDidMount() {

  }

  render() {

    const content = () => {
      console.log(123)
      return <div id="mushroom-box">

        <div className="body-box">
          <Router />
        </div>

        <Footed />
      </div>
    };

    return (
      <BrowserRouter basename={`/${CONTEXT}`}>
        {content()}
      </BrowserRouter>
    );
  }
}

export default App;
