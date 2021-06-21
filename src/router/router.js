import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";//引入routerdom

// 导入的页面
import Home from "../pages/home/index.jsx";
import Terms from "../pages/terms/index.jsx";

class Router extends Component {
    render() {
        return <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/terms" exact component={Terms} />
        </Switch>
    }
}

export default Router;
