import React from 'react';
import { HashRouter } from "react-router-dom";//引入routerdom
import { CONTEXT } from './config/env';
import Router from "./router/router"; //引入路由管理js
import './App.css';
import 'antd/dist/antd.css';
import Header from './component/Header';
import Footed from './component/Footed';
import { connect } from 'react-redux';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // history: useHistory()
    }
  }

  componentDidMount() {

  }

  render() {

    const content = () => {
      return <div id="mushroom-box">

        <Header url={this} />

        <div className="body-box">
          <Router />
        </div>

        <Footed />
      </div>
    };

    return (
      <HashRouter basename={`/${CONTEXT}`}>
        {content()}
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    num: state.calculate.num
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(),
  decrement: () => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
